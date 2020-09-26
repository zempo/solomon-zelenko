
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, f as space, e as element, g as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as noop, F as add_render_callback, G as create_in_transition, m as detach_dev } from './main-5ffcd2c8.js';
import { f as fade } from './index-23b34d96.js';

/* src/pages/about.svelte generated by Svelte v3.18.1 */
const file = "src/pages/about.svelte";

function create_fragment(ctx) {
	let t0;
	let section;
	let h1;
	let section_intro;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h1 = element("h1");
			h1.textContent = "Who is Solomon?";
			document.title = "About";
			attr_dev(h1, "class", "svelte-9dozca");
			add_location(h1, file, 113, 2, 2986);
			attr_dev(section, "class", "pg about-pg");
			add_location(section, file, 112, 0, 2926);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h1);
		},
		p: noop,
		i: function intro(local) {
			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fade, { duration: 500 });
					section_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
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

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=about-b474e0be.js.map
