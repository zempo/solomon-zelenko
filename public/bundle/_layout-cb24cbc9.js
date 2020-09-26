
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, u as url, c as component_subscribe, b as isActive, e as element, t as text, f as space, g as attr_dev, h as toggle_class, j as add_location, k as insert_dev, l as append_dev, m as detach_dev, n as noop, o as destroy_each, p as create_slot, q as create_component, r as mount_component, w as get_slot_context, x as get_slot_changes, y as transition_in, z as transition_out, A as destroy_component } from './main-41736f4c.js';

/* src/Nav.svelte generated by Svelte v3.18.1 */
const file = "src/Nav.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i][0];
	child_ctx[4] = list[i][1];
	return child_ctx;
}

// (145:6) {#each links as [path, name]}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*name*/ ctx[4] + "";
	let t0;
	let a_href_value;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[0](/*path*/ ctx[3]));
			toggle_class(a, "selected", /*$isActive*/ ctx[1](/*path*/ ctx[3]));
			add_location(a, file, 146, 10, 3705);
			attr_dev(li, "class", "svelte-1qyleqn");
			add_location(li, file, 145, 8, 3690);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$url*/ 1 && a_href_value !== (a_href_value = /*$url*/ ctx[0](/*path*/ ctx[3]))) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*$isActive, links*/ 6) {
				toggle_class(a, "selected", /*$isActive*/ ctx[1](/*path*/ ctx[3]));
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(145:6) {#each links as [path, name]}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let header;
	let nav;
	let ul;
	let each_value = /*links*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			header = element("header");
			nav = element("nav");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(ul, "class", "main-links svelte-1qyleqn");
			add_location(ul, file, 143, 4, 3622);
			attr_dev(nav, "role", "navigation");
			add_location(nav, file, 137, 2, 3418);
			add_location(header, file, 133, 0, 3280);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			append_dev(header, nav);
			append_dev(nav, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$url, links, $isActive*/ 7) {
				each_value = /*links*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			destroy_each(each_blocks, detaching);
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

function instance($$self, $$props, $$invalidate) {
	let $url;
	let $isActive;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));
	validate_store(isActive, "isActive");
	component_subscribe($$self, isActive, $$value => $$invalidate(1, $isActive = $$value));

	const links = [
		["./home", "home"],
		["./about", "about"],
		["./works", "works"],
		["./blog", "blog"],
		["./merch", "merch"],
		["./contact", "contact"]
	];

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$url" in $$props) url.set($url = $$props.$url);
		if ("$isActive" in $$props) isActive.set($isActive = $$props.$isActive);
	};

	return [$url, $isActive, links];
}

class Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Nav",
			options,
			id: create_fragment.name
		});
	}
}

/* src/pages/_layout.svelte generated by Svelte v3.18.1 */

function create_fragment$1(ctx) {
	let t;
	let current;
	const nav = new Nav({ $$inline: true });
	const default_slot_template = /*$$slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			create_component(nav.$$.fragment);
			t = space();
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(nav, target, anchor);
			insert_dev(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 1) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[0], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(nav.$$.fragment, local);
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(nav.$$.fragment, local);
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(nav, detaching);
			if (detaching) detach_dev(t);
			if (default_slot) default_slot.d(detaching);
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
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

	return [$$scope, $$slots];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Layout;
//# sourceMappingURL=_layout-cb24cbc9.js.map
