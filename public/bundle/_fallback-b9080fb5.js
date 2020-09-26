
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, D as route, e as element, f as space, t as text, g as attr_dev, j as add_location, k as insert_dev, l as append_dev, C as set_data_dev, n as noop, m as detach_dev } from './main-1f2685fa.js';

/* src/pages/_fallback.svelte generated by Svelte v3.18.1 */
const file = "src/pages/_fallback.svelte";

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
	let p1;
	let t7;
	let nav;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			h1.textContent = "Uh oh!";
			t1 = space();
			p0 = element("p");
			t2 = text("I can't find the\n    ");
			strong = element("strong");
			t3 = text(t3_value);
			t4 = text("\n    page...");
			t5 = space();
			p1 = element("p");
			p1.textContent = "Would some other links cheer you up?";
			t7 = space();
			nav = element("nav");
			attr_dev(h1, "class", "marker svelte-9moybi");
			add_location(h1, file, 127, 2, 3220);
			attr_dev(strong, "class", "svelte-9moybi");
			add_location(strong, file, 130, 4, 3282);
			attr_dev(p0, "class", "svelte-9moybi");
			add_location(p0, file, 128, 2, 3253);
			attr_dev(p1, "class", "svelte-9moybi");
			add_location(p1, file, 134, 2, 3339);
			attr_dev(nav, "class", ".err-nav");
			attr_dev(nav, "role", "navigation");
			attr_dev(nav, "aria-label", "");
			add_location(nav, file, 136, 2, 3386);
			attr_dev(section, "class", "pg err-pg svelte-9moybi");
			add_location(section, file, 126, 0, 3190);
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
			append_dev(section, p1);
			append_dev(section, t7);
			append_dev(section, nav);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$route*/ 1 && t3_value !== (t3_value = /*$route*/ ctx[0].leftover + "")) set_data_dev(t3, t3_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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
	validate_store(route, "route");
	component_subscribe($$self, route, $$value => $$invalidate(0, $route = $$value));

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$route" in $$props) route.set($route = $$props.$route);
	};

	return [$route];
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
//# sourceMappingURL=_fallback-b9080fb5.js.map
