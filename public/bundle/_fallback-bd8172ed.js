
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, D as route, b as isActive, e as element, t as text, f as space, g as attr_dev, h as toggle_class, j as add_location, k as insert_dev, l as append_dev, m as detach_dev, C as set_data_dev, n as noop, o as destroy_each } from './main-ba6eedca.js';

/* src/pages/_fallback.svelte generated by Svelte v3.18.1 */
const file = "src/pages/_fallback.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i][0];
	child_ctx[4] = list[i][1];
	return child_ctx;
}

// (151:6) {#each links as [path, name]}
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
			attr_dev(a, "href", a_href_value = `${/*path*/ ctx[3]}`);
			toggle_class(a, "selected", /*$isActive*/ ctx[1](/*path*/ ctx[3]));
			add_location(a, file, 152, 10, 3714);
			attr_dev(li, "class", "svelte-eindq0");
			add_location(li, file, 151, 8, 3699);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
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
		source: "(151:6) {#each links as [path, name]}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let h1;
	let t1;
	let p0;
	let t2;
	let strong;
	let t3_value = /*$route*/ ctx[0].leftover + "";
	let t3;
	let t4;
	let t5;
	let br;
	let t6;
	let p1;
	let t8;
	let nav;
	let ul;
	let each_value = /*links*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			h1.textContent = "Oops!";
			t1 = space();
			p0 = element("p");
			t2 = text("I can't find the\n    ");
			strong = element("strong");
			t3 = text(t3_value);
			t4 = text("\n    page...");
			t5 = space();
			br = element("br");
			t6 = space();
			p1 = element("p");
			p1.textContent = "Would these links cheer you up?";
			t8 = space();
			nav = element("nav");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(h1, "class", "marker svelte-eindq0");
			add_location(h1, file, 139, 2, 3438);
			attr_dev(strong, "class", "svelte-eindq0");
			add_location(strong, file, 142, 4, 3499);
			attr_dev(p0, "class", "svelte-eindq0");
			add_location(p0, file, 140, 2, 3470);
			add_location(br, file, 145, 2, 3555);
			attr_dev(p1, "class", "svelte-eindq0");
			add_location(p1, file, 146, 2, 3564);
			attr_dev(ul, "class", "svelte-eindq0");
			add_location(ul, file, 149, 4, 3650);
			attr_dev(nav, "class", "err-nav svelte-eindq0");
			attr_dev(nav, "role", "navigation");
			add_location(nav, file, 148, 2, 3606);
			attr_dev(section, "class", "pg err-pg svelte-eindq0");
			add_location(section, file, 138, 0, 3408);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(p0, strong);
			append_dev(strong, t3);
			append_dev(p0, t4);
			append_dev(section, t5);
			append_dev(section, br);
			append_dev(section, t6);
			append_dev(section, p1);
			append_dev(section, t8);
			append_dev(section, nav);
			append_dev(nav, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$route*/ 1 && t3_value !== (t3_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t3, t3_value);

			if (dirty & /*links, $isActive*/ 6) {
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
			if (detaching) detach_dev(section);
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
	let $route;
	let $isActive;
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(0, $route = $$value));
	validate_store(isActive, "isActive");
	component_subscribe($$self, isActive, $$value => $$invalidate(1, $isActive = $$value));

	const links = [
		["./index", "home"],
		["./about", "about"],
		["./works", "works"],
		["./blog", "blog"],
		["./merch", "merch"],
		["./help", "help"]
	];

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$route" in $$props) route.set($route = $$props.$route);
		if ("$isActive" in $$props) isActive.set($isActive = $$props.$isActive);
	};

	return [$route, $isActive, links];
}

class Fallback extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fallback",
			options,
			id: create_fragment.name
		});
	}
}

export default Fallback;
//# sourceMappingURL=_fallback-bd8172ed.js.map
