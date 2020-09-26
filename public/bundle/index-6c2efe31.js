
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, f as space, g as attr_dev, j as add_location, k as insert_dev, n as noop, m as detach_dev } from './main-d9d1df2e.js';

/* src/pages/index.svelte generated by Svelte v3.18.1 */

const file = "src/pages/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "This is index (home)!";
			t1 = space();
			p = element("p");
			p.textContent = "We are using Routify.";
			attr_dev(h1, "class", "svelte-9dozca");
			add_location(h1, file, 104, 0, 2809);
			attr_dev(p, "class", "svelte-9dozca");
			add_location(p, file, 105, 0, 2840);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
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

class Pages extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Pages",
			options,
			id: create_fragment.name
		});
	}
}

export default Pages;
//# sourceMappingURL=index-6c2efe31.js.map
