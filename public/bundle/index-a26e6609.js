
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, u as url, e as element, f as space, t as text, j as add_location, g as attr_dev, k as insert_dev, l as append_dev, n as noop, m as detach_dev } from './main-22d4b318.js';

/* src/pages/blog/index.svelte generated by Svelte v3.18.1 */
const file = "src/pages/blog/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let ul;
	let li0;
	let a0;
	let t2;
	let a0_href_value;
	let t3;
	let li1;
	let a1;
	let t4;
	let a1_href_value;
	let t5;
	let li2;
	let a2;
	let t6;
	let a2_href_value;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Welcome to my blog";
			t1 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t2 = text("Foo");
			t3 = space();
			li1 = element("li");
			a1 = element("a");
			t4 = text("Bar");
			t5 = space();
			li2 = element("li");
			a2 = element("a");
			t6 = text("Lum");
			add_location(h1, file, 4, 0, 63);
			attr_dev(a0, "href", a0_href_value = /*$url*/ ctx[0]("blog/foo"));
			add_location(a0, file, 7, 4, 107);
			add_location(li0, file, 6, 2, 98);
			attr_dev(a1, "href", a1_href_value = /*$url*/ ctx[0]("blog/bar"));
			add_location(a1, file, 10, 4, 161);
			add_location(li1, file, 9, 2, 152);
			attr_dev(a2, "href", a2_href_value = /*$url*/ ctx[0]("blog/lum"));
			add_location(a2, file, 13, 4, 215);
			add_location(li2, file, 12, 2, 206);
			add_location(ul, file, 5, 0, 91);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, a0);
			append_dev(a0, t2);
			append_dev(ul, t3);
			append_dev(ul, li1);
			append_dev(li1, a1);
			append_dev(a1, t4);
			append_dev(ul, t5);
			append_dev(ul, li2);
			append_dev(li2, a2);
			append_dev(a2, t6);
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul);
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
//# sourceMappingURL=index-a26e6609.js.map
