
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, u as url, e as element, t as text, j as add_location, k as insert_dev, l as append_dev, C as set_data_dev, m as detach_dev, f as space, g as attr_dev, n as noop, o as destroy_each } from './main-63bedc9a.js';

/* src/pages/blog/[slug].svelte generated by Svelte v3.18.1 */
const file = "src/pages/blog/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (7:0) {#each [0, 1, 2, 3, 4] as i}
function create_each_block(ctx) {
	let p;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("Dummy text: ");
			t1 = text(/*i*/ ctx[2]);
			t2 = text(" for ");
			t3 = text(/*slug*/ ctx[0]);
			t4 = text(".");
			add_location(p, file, 7, 2, 143);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			append_dev(p, t1);
			append_dev(p, t2);
			append_dev(p, t3);
			append_dev(p, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*slug*/ 1) set_data_dev(t3, /*slug*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(7:0) {#each [0, 1, 2, 3, 4] as i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let a;
	let t4;
	let a_href_value;
	let each_value = [0, 1, 2, 3, 4];
	let each_blocks = [];

	for (let i = 0; i < 5; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Blog article: ");
			t1 = text(/*slug*/ ctx[0]);
			t2 = space();

			for (let i = 0; i < 5; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			a = element("a");
			t4 = text("Delete");
			add_location(h1, file, 5, 0, 82);
			attr_dev(a, "href", a_href_value = /*$url*/ ctx[1](`${/*slug*/ ctx[0]}/delete`));
			add_location(a, file, 10, 0, 187);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);

			for (let i = 0; i < 5; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t3, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slug*/ 1) set_data_dev(t1, /*slug*/ ctx[0]);

			if (dirty & /*slug*/ 1) {
				each_value = [0, 1, 2, 3, 4];
				let i;

				for (i = 0; i < 5; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t3.parentNode, t3);
					}
				}

				for (; i < 5; i += 1) {
					each_blocks[i].d(1);
				}
			}

			if (dirty & /*$url, slug*/ 3 && a_href_value !== (a_href_value = /*$url*/ ctx[1](`${/*slug*/ ctx[0]}/delete`))) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(a);
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
	component_subscribe($$self, url, $$value => $$invalidate(1, $url = $$value));
	let { slug } = $$props;
	const writable_props = ["slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
	};

	$$self.$capture_state = () => {
		return { slug, $url };
	};

	$$self.$inject_state = $$props => {
		if ("slug" in $$props) $$invalidate(0, slug = $$props.slug);
		if ("$url" in $$props) url.set($url = $$props.$url);
	};

	return [slug, $url];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { slug: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*slug*/ ctx[0] === undefined && !("slug" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
		}
	}

	get slug() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
//# sourceMappingURL=[slug]-c811dc3a.js.map
