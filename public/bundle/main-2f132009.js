
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if (typeof $$scope.dirty === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
const seen_callbacks = new Set();
function flush() {
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error(`Cannot have duplicate keys in a keyed each`);
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if ($$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.18.1' }, detail)));
}
function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data)
        return;
    dispatch_dev("SvelteDOMSetData", { node: text, data });
    text.data = data;
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop;
            }
        };
        const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}

const beforeUrlChange = {
  _hooks: [],
  subscribe(listener) {
    const hooks = this._hooks;
    const index = hooks.length;
    listener(callback => { hooks[index] = callback; });
    return () => delete hooks[index]
  }
};

/**
 * We have to grab params and leftover from the context and not directly from the store.
 * Otherwise the context is updated before the component is destroyed.
 **/
const params = {
  subscribe(listener) {
    return derived(
      getContext('routify'),
      context => context.route.params
    ).subscribe(listener)
  },
};

/** HELPERS */
const url = {
  subscribe(listener) {
    return derived(getContext('routify'), context => context.url).subscribe(
      listener
    )
  },
};

const isActive = {
  subscribe(listener) {
    return derived(
      getContext('routify'),
      context => context.isActive
    ).subscribe(listener)
  },
};

function _isActive(context, route) {
  const url = _url(context, route);
  return function (path, keepIndex = true) {
    path = url(path, null, keepIndex);
    const currentPath = url(route.path, null, keepIndex);
    const re = new RegExp('^' + path);
    return currentPath.match(re)
  }
}

function _goto(context, route) {
  const url = _url(context, route);
  return function goto(path, params, _static, shallow) {
    const href = url(path, params);
    if (!_static) history.pushState({}, null, href);
    else getContext('routifyupdatepage')(href, shallow);
  }
}

function _url(context, route) {
  return function url(path, params, preserveIndex) {
    path = path || './';

    if (!preserveIndex) path = path.replace(/index$/, '');

    if (path.match(/^\.\.?\//)) {
      //RELATIVE PATH
      // get component's dir
      // let dir = context.path.replace(/[^\/]+$/, '')
      let dir = context.path;
      // traverse through parents if needed
      const traverse = path.match(/\.\.\//g) || [];
      traverse.forEach(() => {
        dir = dir.replace(/\/[^\/]+\/?$/, '');
      });

      // strip leading periods and slashes
      path = path.replace(/^[\.\/]+/, '');
      dir = dir.replace(/\/$/, '') + '/';
      path = dir + path;
    } else if (path.match(/^\//)) ;

    params = Object.assign({}, route.params, context.params, params);
    for (const [key, value] of Object.entries(params)) {
      path = path.replace(`:${key}`, value);
    }
    return path
  }
}

const route = writable({});

const MATCH_PARAM = RegExp(/\:[^\/\()]+/g);

const pathToRegex = (str, recursive) => {
  const suffix = recursive ? '' : '/?$'; //fallbacks should match recursively
  str = str.replace(/\/_fallback?$/, '(/|$)');
  str = str.replace(/\/index$/, '(/index)?'); //index files should be matched even if not present in url
  str = '^' + str.replace(MATCH_PARAM, '([^/]+)') + suffix;
  return str
};

const pathToParams = string => {
  const matches = string.match(MATCH_PARAM);
  if (matches) return matches.map(str => str.substr(1, str.length - 2))
};

const pathToRank = ({ path }) => {
  return path
    .split('/').filter(Boolean)
    .map(str => (str === '_fallback' ? 'A' : str.startsWith(':') ? 'B' : 'C'))
    .join('')
};

/* node_modules/@sveltech/routify/runtime/Route.svelte generated by Svelte v3.18.1 */
const file = "node_modules/@sveltech/routify/runtime/Route.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	return child_ctx;
}

// (74:0) {#if component}
function create_if_block_1(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = [0];
	const get_key = ctx => /*key*/ ctx[5];
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < 1; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < 1; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < 1; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const each_value = [0];
			group_outros();
			validate_each_keys(ctx, each_value, get_each_context, get_key);
			each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
			check_outros();
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < 1; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < 1; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			for (let i = 0; i < 1; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(74:0) {#if component}",
		ctx
	});

	return block;
}

// (82:6) {#if remainingLayouts.length}
function create_if_block_2(ctx) {
	let current;

	const route_1 = new Route({
			props: {
				layouts: [.../*remainingLayouts*/ ctx[7]],
				Decorator: typeof /*decorator*/ ctx[23] !== "undefined"
				? /*decorator*/ ctx[23]
				: /*_passthroughDecorator*/ ctx[2],
				_passthroughDecorator: /*Decorator*/ ctx[1],
				scoped: {
					.../*scoped*/ ctx[0],
					.../*scopeToChild*/ ctx[9]
				}
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(route_1.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(route_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const route_1_changes = {};
			if (dirty & /*remainingLayouts*/ 128) route_1_changes.layouts = [.../*remainingLayouts*/ ctx[7]];

			if (dirty & /*decorator, _passthroughDecorator*/ 8388612) route_1_changes.Decorator = typeof /*decorator*/ ctx[23] !== "undefined"
			? /*decorator*/ ctx[23]
			: /*_passthroughDecorator*/ ctx[2];

			if (dirty & /*Decorator*/ 2) route_1_changes._passthroughDecorator = /*Decorator*/ ctx[1];

			if (dirty & /*scoped, scopeToChild*/ 513) route_1_changes.scoped = {
				.../*scoped*/ ctx[0],
				.../*scopeToChild*/ ctx[9]
			};

			route_1.$set(route_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(route_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(route_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(route_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(82:6) {#if remainingLayouts.length}",
		ctx
	});

	return block;
}

// (76:4) <svelte:component        this={component}        let:scoped={scopeToChild}        let:decorator        {scoped}        {...propFromParam}>
function create_default_slot(ctx) {
	let t;
	let current;
	let if_block = /*remainingLayouts*/ ctx[7].length && create_if_block_2(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*remainingLayouts*/ ctx[7].length) {
				if (if_block) {
					if_block.p(ctx, dirty);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(76:4) <svelte:component        this={component}        let:scoped={scopeToChild}        let:decorator        {scoped}        {...propFromParam}>",
		ctx
	});

	return block;
}

// (75:2) {#each [0] as dummy (key)}
function create_each_block(key_2, ctx) {
	let first;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [{ scoped: /*scoped*/ ctx[0] }, /*propFromParam*/ ctx[4]];
	var switch_value = /*component*/ ctx[6];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: {
				default: [
					create_default_slot,
					({ scoped: scopeToChild, decorator }) => ({ 9: scopeToChild, 23: decorator }),
					({ scoped: scopeToChild, decorator }) => (scopeToChild ? 512 : 0) | (decorator ? 8388608 : 0)
				]
			},
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	const block = {
		key: key_2,
		first: null,
		c: function create() {
			first = empty();
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);

			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch_instance_changes = (dirty & /*scoped, propFromParam*/ 17)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*scoped*/ 1 && { scoped: /*scoped*/ ctx[0] },
					dirty & /*propFromParam*/ 16 && get_spread_object(/*propFromParam*/ ctx[4])
				])
			: {};

			if (dirty & /*$$scope, remainingLayouts, decorator, _passthroughDecorator, Decorator, scoped, scopeToChild*/ 25166471) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[6])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(75:2) {#each [0] as dummy (key)}",
		ctx
	});

	return block;
}

// (94:0) {#if !parentElement}
function create_if_block(ctx) {
	let span;
	let setParent_action;
	let dispose;

	const block = {
		c: function create() {
			span = element("span");
			add_location(span, file, 94, 2, 2533);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			dispose = action_destroyer(setParent_action = /*setParent*/ ctx[8].call(null, span));
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(94:0) {#if !parentElement}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let if_block1_anchor;
	let current;
	let if_block0 = /*component*/ ctx[6] && create_if_block_1(ctx);
	let if_block1 = !/*parentElement*/ ctx[3] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*component*/ ctx[6]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
					transition_in(if_block0, 1);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (!/*parentElement*/ ctx[3]) {
				if (!if_block1) {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function onFinishedLoadingPage() {
	await tick();

	if (!window.routify.stopAutoReady) {
		// Let every know the last child has rendered
		dispatchEvent(new CustomEvent("app-loaded"));
	}
}

function instance($$self, $$props, $$invalidate) {
	let $route;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(15, $route = $$value));

	let { layouts = [] } = $$props,
		{ scoped = {} } = $$props,
		{ Decorator = undefined } = $$props,
		{ _passthroughDecorator = undefined } = $$props;

	let scopeToChild, props = {}, parentElement, propFromParam = {}, key = 0;
	const context = writable({});
	setContext("routify", context);

	function setParent(el) {
		$$invalidate(3, parentElement = el.parentElement);
	}

	let _lastLayout, _Component;

	function onComponentReady() {
		$$invalidate(11, _lastLayout = layout);
		if (layoutIsUpdated) $$invalidate(5, key++, key);
		if (remainingLayouts.length === 0) onFinishedLoadingPage();

		context.set({
			route: $route,
			path: layout.path,
			url: _url(layout, $route),
			goto: _goto(layout, $route),
			isActive: _isActive(layout, $route)
		});
	}

	let component;

	function setComponent(layout) {
		if (layoutIsUpdated) _Component = layout.component();

		if (_Component.then) _Component.then(res => {
			$$invalidate(6, component = res);
			onComponentReady();
		}); else {
			$$invalidate(6, component = _Component);
			onComponentReady();
		}
	}

	const writable_props = ["layouts", "scoped", "Decorator", "_passthroughDecorator"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Route> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("layouts" in $$props) $$invalidate(10, layouts = $$props.layouts);
		if ("scoped" in $$props) $$invalidate(0, scoped = $$props.scoped);
		if ("Decorator" in $$props) $$invalidate(1, Decorator = $$props.Decorator);
		if ("_passthroughDecorator" in $$props) $$invalidate(2, _passthroughDecorator = $$props._passthroughDecorator);
	};

	$$self.$capture_state = () => {
		return {
			layouts,
			scoped,
			Decorator,
			_passthroughDecorator,
			scopeToChild,
			props,
			parentElement,
			propFromParam,
			key,
			_lastLayout,
			_Component,
			component,
			layout,
			remainingLayouts,
			layoutIsUpdated,
			$route
		};
	};

	$$self.$inject_state = $$props => {
		if ("layouts" in $$props) $$invalidate(10, layouts = $$props.layouts);
		if ("scoped" in $$props) $$invalidate(0, scoped = $$props.scoped);
		if ("Decorator" in $$props) $$invalidate(1, Decorator = $$props.Decorator);
		if ("_passthroughDecorator" in $$props) $$invalidate(2, _passthroughDecorator = $$props._passthroughDecorator);
		if ("scopeToChild" in $$props) $$invalidate(9, scopeToChild = $$props.scopeToChild);
		if ("props" in $$props) props = $$props.props;
		if ("parentElement" in $$props) $$invalidate(3, parentElement = $$props.parentElement);
		if ("propFromParam" in $$props) $$invalidate(4, propFromParam = $$props.propFromParam);
		if ("key" in $$props) $$invalidate(5, key = $$props.key);
		if ("_lastLayout" in $$props) $$invalidate(11, _lastLayout = $$props._lastLayout);
		if ("_Component" in $$props) _Component = $$props._Component;
		if ("component" in $$props) $$invalidate(6, component = $$props.component);
		if ("layout" in $$props) $$invalidate(13, layout = $$props.layout);
		if ("remainingLayouts" in $$props) $$invalidate(7, remainingLayouts = $$props.remainingLayouts);
		if ("layoutIsUpdated" in $$props) layoutIsUpdated = $$props.layoutIsUpdated;
		if ("$route" in $$props) route.set($route = $$props.$route);
	};

	let layout;
	let remainingLayouts;
	let layoutIsUpdated;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*Decorator, layouts*/ 1026) {
			 if (Decorator) {
				$$invalidate(10, layouts = [
					{
						component: () => Decorator,
						path: layouts[0].path + "__decorator"
					},
					...layouts
				]);
			}
		}

		if ($$self.$$.dirty & /*layouts*/ 1024) {
			 $$invalidate(13, [layout, ...remainingLayouts] = layouts, layout, (($$invalidate(7, remainingLayouts), $$invalidate(10, layouts)), $$invalidate(1, Decorator)));
		}

		if ($$self.$$.dirty & /*layout*/ 8192) {
			 if (layout && layout.param) $$invalidate(4, propFromParam = layout.param);
		}

		if ($$self.$$.dirty & /*_lastLayout, layout*/ 10240) {
			 layoutIsUpdated = !_lastLayout || _lastLayout.path !== layout.path;
		}

		if ($$self.$$.dirty & /*layout*/ 8192) {
			 setComponent(layout);
		}
	};

	return [
		scoped,
		Decorator,
		_passthroughDecorator,
		parentElement,
		propFromParam,
		key,
		component,
		remainingLayouts,
		setParent,
		scopeToChild,
		layouts
	];
}

class Route extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			layouts: 10,
			scoped: 0,
			Decorator: 1,
			_passthroughDecorator: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Route",
			options,
			id: create_fragment.name
		});
	}

	get layouts() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set layouts(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scoped() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scoped(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get Decorator() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set Decorator(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get _passthroughDecorator() {
		throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set _passthroughDecorator(value) {
		throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const { _hooks } = beforeUrlChange;

function init$1(routes, callback) {
  let prevRoute = false;

  function updatePage(url, shallow) {

    const currentUrl = window.location.pathname;
    url = url || currentUrl;

    const route$1 = urlToRoute(url, routes);
    const currentRoute = shallow && urlToRoute(currentUrl, routes);
    const contextRoute = currentRoute || route$1;
    const layouts = [...contextRoute.layouts, route$1];
    delete prevRoute.prev;
    route$1.prev = prevRoute;
    prevRoute = route$1;

    //set the route in the store
    route.set(route$1);

    //run callback in Router.svelte
    callback(layouts);
  }

  createEventListeners(updatePage);

  return updatePage
}

/**
 * svelte:window events doesn't work on refresh
 * @param {Function} updatePage 
 */
function createEventListeners(updatePage) {
['pushState', 'replaceState'].forEach(eventName => {
    const fn = history[eventName];
    history[eventName] = async function (state, title, url) {
      const event = new Event(eventName.toLowerCase());
      Object.assign(event, { state, title, url });

      if (await runHooksBeforeUrlChange(event)) {
        fn.apply(this, [state, title, url]);
        return dispatchEvent(event)
      }
    };
  });

  // click
  addEventListener('click', handleClick)
    ;['pushstate', 'popstate', 'replacestate'].forEach(e =>
      addEventListener(e, () => updatePage())
    );
}

function handleClick(event) {
  const el = event.target.closest('a');
  const href = el && el.getAttribute('href');

  if (
    event.ctrlKey ||
    event.metaKey ||
    event.altKey ||
    event.shiftKey ||
    event.button ||
    event.defaultPrevented
  )
    return
  if (!href || el.target || el.host !== location.host) return

  event.preventDefault();
  history.pushState({}, '', href);
}

async function runHooksBeforeUrlChange(event) {
  const route$1 = get_store_value(route);
  for (const hook of _hooks.filter(Boolean)) {
    // return false if the hook returns false
    if (await !hook(event, route$1)) return false
  }
  return true
}


function urlToRoute(url, routes) {
  const mockUrl = (new URL(location)).searchParams.get('__mock-url');
  url = mockUrl || url;

  const route = routes.find(route => url.match(route.regex));
  if (!route)
    throw new Error(
      `Route could not be found. Make sure ${url}.svelte or ${url}/index.svelte exists. A restart may be required.`
    )

  if (route.paramKeys) {
    const layouts = layoutByPos(route.layouts);
    const fragments = url.split('/').filter(Boolean);
    const routeProps = getRouteProps(route.path);

    routeProps.forEach((prop, i) => {
      if (prop) {
        route.params[prop] = fragments[i];
        if (layouts[i]) layouts[i].param = { [prop]: fragments[i] };
        else route.param = { [prop]: fragments[i] };
      }
    });
  }

  route.leftover = url.replace(new RegExp(route.regex), '');

  return route
}

function layoutByPos(layouts) {
  const arr = [];
  layouts.forEach(layout => {
    arr[layout.path.split('/').filter(Boolean).length - 1] = layout;
  });
  return arr
}

function getRouteProps(url) {
  return url
    .split('/')
    .filter(Boolean)
    .map(f => f.match(/\:(.+)/))
    .map(f => f && f[1])
}

/* node_modules/@sveltech/routify/runtime/Router.svelte generated by Svelte v3.18.1 */

function create_fragment$1(ctx) {
	let current;

	const route = new Route({
			props: { layouts: /*layouts*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(route.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(route, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const route_changes = {};
			if (dirty & /*layouts*/ 1) route_changes.layouts = /*layouts*/ ctx[0];
			route.$set(route_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(route.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(route.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(route, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	window.routify = {};
	let { routes } = $$props;
	let layouts = [];
	const callback = res => $$invalidate(0, layouts = res);
	const updatePage = init$1(routes, callback);
	setContext("routifyupdatepage", updatePage);
	updatePage();
	const writable_props = ["routes"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Router> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("routes" in $$props) $$invalidate(1, routes = $$props.routes);
	};

	$$self.$capture_state = () => {
		return { routes, layouts };
	};

	$$self.$inject_state = $$props => {
		if ("routes" in $$props) $$invalidate(1, routes = $$props.routes);
		if ("layouts" in $$props) $$invalidate(0, layouts = $$props.layouts);
	};

	return [layouts, routes];
}

class Router extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { routes: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Router",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*routes*/ ctx[1] === undefined && !("routes" in props)) {
			console.warn("<Router> was created without expected prop 'routes'");
		}
	}

	get routes() {
		throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set routes(value) {
		throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

function buildRoutes(routes, routeKeys) {
  return (
    routes
      // .map(sr => deserializeRoute(sr, routeKeys))
      .map(decorateRoute)
      .sort((c, p) => (c.ranking >= p.ranking ? -1 : 1))
  )
}

const decorateRoute = function(route) {
  route.paramKeys = pathToParams(route.path);
  route.regex = pathToRegex(route.path, route.isFallback);
  route.name = route.path.match(/[^\/]*\/[^\/]+$/)[0].replace(/[^\w\/]/g, ''); //last dir and name, then replace all but \w and /
  route.ranking = pathToRank(route);
  route.layouts.map(l => {
    l.param = {};
    return l
  });
  route.params = {};

  return route
};

//layouts
const layouts = {
  "/_layout": {
    "component": () => import('./_layout-6a5dcdae.js').then(m => m.default),
    "meta": {},
    "relativeDir": "",
    "path": ""
  }
};


//raw routes
const _routes = [
  {
    "component": () => import('./delete-67202f1e.js').then(m => m.default),
    "meta": {},
    "isIndex": false,
    "isFallback": false,
    "hasParam": false,
    "path": "/:type/:id/delete",
    "shortPath": "/:type/:id/delete",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => import('./_fallback-7aadcba6.js').then(m => m.default),
    "meta": {},
    "isIndex": false,
    "isFallback": true,
    "hasParam": false,
    "path": "/_fallback",
    "shortPath": "/_fallback",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => import('./about-4a5ed251.js').then(m => m.default),
    "meta": {},
    "isIndex": false,
    "isFallback": false,
    "hasParam": false,
    "path": "/about",
    "shortPath": "/about",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => import('./[slug]-837b98bc.js').then(m => m.default),
    "meta": {},
    "isIndex": false,
    "isFallback": false,
    "hasParam": true,
    "path": "/blog/:slug",
    "shortPath": "/blog/:slug",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => import('./index-10eba9be.js').then(m => m.default),
    "meta": {},
    "isIndex": true,
    "isFallback": false,
    "hasParam": false,
    "path": "/blog/index",
    "shortPath": "/blog",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => import('./index-5a2f7705.js').then(m => m.default),
    "meta": {},
    "isIndex": true,
    "isFallback": false,
    "hasParam": false,
    "path": "/index",
    "shortPath": "",
    "layouts": [
      layouts['/_layout']
    ]
  }
];

//routes
const routes = buildRoutes(_routes);

/* src/App.svelte generated by Svelte v3.18.1 */
const file$1 = "src/App.svelte";

function create_fragment$2(ctx) {
	let main;
	let current;
	const router = new Router({ props: { routes }, $$inline: true });

	const block = {
		c: function create() {
			main = element("main");
			create_component(router.$$.fragment);
			add_location(main, file$1, 122, 0, 3119);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			mount_component(router, main, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(router.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(router.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(router);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment$2.name
		});
	}
}

const app = new App({
	target: document.body,
});

export { destroy_component as A, params as B, set_data_dev as C, route as D, identity as E, add_render_callback as F, create_in_transition as G, SvelteComponentDev as S, app as a, isActive as b, component_subscribe as c, dispatch_dev as d, element as e, space as f, attr_dev as g, toggle_class as h, init as i, add_location as j, insert_dev as k, append_dev as l, detach_dev as m, noop as n, destroy_each as o, create_slot as p, create_component as q, mount_component as r, safe_not_equal as s, text as t, url as u, validate_store as v, get_slot_context as w, get_slot_changes as x, transition_in as y, transition_out as z };
//# sourceMappingURL=main-2f132009.js.map
