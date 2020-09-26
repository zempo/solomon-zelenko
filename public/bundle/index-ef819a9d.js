
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, u as url, f as space, e as element, t as text, j as add_location, g as attr_dev, k as insert_dev, l as append_dev, F as add_render_callback, G as create_in_transition, n as noop, m as detach_dev } from './main-efe7835a.js';
import { f as fade } from './index-896bacbb.js';

/* src/pages/blog/index.svelte generated by Svelte v3.18.1 */
const file = "src/pages/blog/index.svelte";

function create_fragment(ctx) {
	let t0;
	let section;
	let h1;
	let t2;
	let h2;
	let t4;
	let ul;
	let li0;
	let a0;
	let t5;
	let a0_href_value;
	let t6;
	let li1;
	let a1;
	let t7;
	let a1_href_value;
	let t8;
	let li2;
	let a2;
	let t9;
	let a2_href_value;
	let section_intro;

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h1 = element("h1");
			h1.textContent = "Bytes & Snippets";
			t2 = space();
			h2 = element("h2");
			h2.textContent = "Welcome to my blog";
			t4 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t5 = text("Foo");
			t6 = space();
			li1 = element("li");
			a1 = element("a");
			t7 = text("Bar");
			t8 = space();
			li2 = element("li");
			a2 = element("a");
			t9 = text("Lum");
			document.title = "About";
			add_location(h1, file, 10, 2, 220);
			add_location(h2, file, 11, 2, 248);
			attr_dev(a0, "href", a0_href_value = /*$url*/ ctx[0]("blog/foo"));
			add_location(a0, file, 14, 6, 298);
			add_location(li0, file, 13, 4, 287);
			attr_dev(a1, "href", a1_href_value = /*$url*/ ctx[0]("blog/bar"));
			add_location(a1, file, 17, 6, 358);
			add_location(li1, file, 16, 4, 347);
			attr_dev(a2, "href", a2_href_value = /*$url*/ ctx[0]("blog/lum"));
			add_location(a2, file, 20, 6, 418);
			add_location(li2, file, 19, 4, 407);
			add_location(ul, file, 12, 2, 278);
			attr_dev(section, "class", "pg about-pg");
			add_location(section, file, 9, 0, 160);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(section, t2);
			append_dev(section, h2);
			append_dev(section, t4);
			append_dev(section, ul);
			append_dev(ul, li0);
			append_dev(li0, a0);
			append_dev(a0, t5);
			append_dev(ul, t6);
			append_dev(ul, li1);
			append_dev(li1, a1);
			append_dev(a1, t7);
			append_dev(ul, t8);
			append_dev(ul, li2);
			append_dev(li2, a2);
			append_dev(a2, t9);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$url*/ 1 && a0_href_value !== (a0_href_value = /*$url*/ ctx[0]("blog/foo"))) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*$url*/ 1 && a1_href_value !== (a1_href_value = /*$url*/ ctx[0]("blog/bar"))) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*$url*/ 1 && a2_href_value !== (a2_href_value = /*$url*/ ctx[0]("blog/lum"))) {
				attr_dev(a2, "href", a2_href_value);
			}
		},
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

function instance($$self, $$props, $$invalidate) {
	let $url;
	validate_store(url, "url");
	component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("$url" in $$props) url.set($url = $$props.$url);
	};

	return [$url];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}
}

export default Blog;
//# sourceMappingURL=index-ef819a9d.js.map
