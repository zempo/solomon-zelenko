
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, B as params, e as element, t as text, f as space, j as add_location, k as insert_dev, l as append_dev, C as set_data_dev, n as noop, m as detach_dev } from './main-61da5081.js';

/* src/pages/[type]/[id]/delete.svelte generated by Svelte v3.18.1 */
const file = "src/pages/[type]/[id]/delete.svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let button0;
	let t6;
	let button1;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Are you sure you want to delete: ");
			t1 = text(/*id*/ ctx[1]);
			t2 = text(" of type: ");
			t3 = text(/*type*/ ctx[0]);
			t4 = space();
			button0 = element("button");
			button0.textContent = "Yes: confirm";
			t6 = space();
			button1 = element("button");
			button1.textContent = "No: cancel";
			add_location(h1, file, 6, 0, 115);
			add_location(button0, file, 7, 0, 178);
			add_location(button1, file, 8, 0, 208);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			append_dev(h1, t1);
			append_dev(h1, t2);
			append_dev(h1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, button0, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, button1, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*id*/ 2) set_data_dev(t1, /*id*/ ctx[1]);
			if (dirty & /*type*/ 1) set_data_dev(t3, /*type*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(button1);
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
	let $params;
	validate_store(params, "params");
	component_subscribe($$self, params, $$value => $$invalidate(2, $params = $$value));
	let { type } = $$props, { id } = $$props;
	const writable_props = ["type", "id"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Delete> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
	};

	$$self.$capture_state = () => {
		return { type, id, $params };
	};

	$$self.$inject_state = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("id" in $$props) $$invalidate(1, id = $$props.id);
		if ("$params" in $$props) params.set($params = $$props.$params);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$params*/ 4) {
			 $$invalidate(0, type = $params.type);
		}
	};

	return [type, id];
}

class Delete extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { type: 0, id: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Delete",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*type*/ ctx[0] === undefined && !("type" in props)) {
			console.warn("<Delete> was created without expected prop 'type'");
		}

		if (/*id*/ ctx[1] === undefined && !("id" in props)) {
			console.warn("<Delete> was created without expected prop 'id'");
		}
	}

	get type() {
		throw new Error("<Delete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<Delete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Delete>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Delete>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Delete;
//# sourceMappingURL=delete-861bd1b5.js.map
