import { Start as Start_1 } from "./WebSharper.Core.JavaScript/Runtime.js"
import { Lazy, Create as Create_1, MarkResizable, Force, GetOptional, SetOptional, OnLoad } from "./WebSharper.Core.JavaScript/Runtime.js"
function isIDisposable(x){
  return"Dispose"in x;
}
function FinalForm(){
  const _1=Render((_2) =>(_3) =>(_4) =>(_5) => RenderPerson(_2, _3, _4, _5), Run((p) => {
    alert("Welcome to you "+p.firstName+" "+p.lastName+concat_1("", map((n) =>", your "+String(n.Category)+" "+n.name, p.pets))+"!");
  }, PersonPiglet(New("", "", []))));
  LoadLocalTemplates("");
  _c_3.RunById("main", _1);
}
function PersonPiglet(init_2){
  return WithSubmit(op_LessMultiplyGreater(op_LessMultiplyGreater(op_LessMultiplyGreater(Return((first) =>(last) =>(pets) => New(first, last, pets)), IsNotEmpty("Please enter your first name.", Yield(init_2.firstName))), IsNotEmpty("Please enter your last name.", Yield(init_2.lastName))), Many(init_2.pets, New_1(_c.Hobbies, ""), Todoitem)));
}
function RenderPerson(firstName, lastName, pets, submit){
  return _c_3.Element("section", [_c_12.Create("class", "section")], [_c_3.Element("h1", [_c_12.Create("class", "subtitle")], [_c_3.TextNode("TODO LIST")]), _c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Element("label", [_c_12.Create("class", "label")], [_c_3.TextNode("First name: "), _c_3.Input([_c_12.Create("class", "input")], firstName)]), ShowErrorsFor(Through_1(submit.view, firstName))]), _c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Element("label", [_c_12.Create("class", "label")], [_c_3.TextNode("Last name: "), _c_3.Input([_c_12.Create("class", "input")], lastName)]), ShowErrorsFor(Through_1(submit.view, lastName))]), _c_3.Element("h2", [_c_12.Create("class", "subtitle")], [_c_3.TextNode("Your Daily Schedule")]), _c_3.Element("div", [], [pets.Render((ops) =>(category) =>(name) => _c_3.Element("div", [_c_12.Create("class", "field is-horizontal")], [_c_3.Element("div", [_c_12.Create("class", "field-body")], [RenderPet(category, name), ButtonValidate("Move up", [_c_12.Create("class", "button")], ops.moveUp), ButtonValidate("Move down", [_c_12.Create("class", "button")], ops.moveDown), _c_3.Button("Delete", [_c_12.Create("class", "button")], () => {
    ops.u0064elete();
  }), ShowErrorsFor(Through_1(submit.view, name))])])), _c_3.Button("Add Item", [_c_12.Create("class", "button")], () => {
    pets.AddOne();
  })]), _c_3.Element("div", [], [_c_3.Button("Submit", [_c_12.Create("class", "button")], () => {
    submit.Trigger();
  })])]);
}
function Todoitem(init_2){
  return op_LessMultiplyGreater(op_LessMultiplyGreater(Return((s) =>(n) => New_1(s, n)), Yield(init_2.Category)), IsNotEmpty("Please Fill up your schedule.", Yield(init_2.name)));
}
function ShowErrorsFor(v){
  return _c_3.EmbedView(Map_1((a) => {
    if(a.$==1){
      const errors=a.$0;
      return _c_3.Concat(ofSeq_1(delay(() => map((error) => _c_3.Element("b", [_c_12.Create("style", "color:red")], [_c_3.TextNode(error.message)]), errors))));
    }
    else return _c_3.Empty;
  }, v));
}
function RenderPet(category, name){
  return _c_3.Concat([_c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Element("label", [_c_12.Create("class", "label")], [_c_3.Radio([], _c.Hobbies, category), _c_3.TextNode(String(_c.Hobbies))])]), _c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Element("label", [_c_12.Create("class", "label")], [_c_3.Radio([], _c.Career, category), _c_3.TextNode(String(_c.Career))])]), _c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Element("label", [_c_12.Create("class", "label")], [_c_3.Radio([], _c.Lifestyle, category), _c_3.TextNode(String(_c.Lifestyle))])]), _c_3.Element("div", [_c_12.Create("class", "field")], [_c_3.Input([_c_12.Create("class", "input")], name)])]);
}
function FailWith(msg){
  throw new Error(msg);
}
function KeyValue(kvp){
  return[kvp.K, kvp.V];
}
function range(min, max_1){
  const count=1+max_1-min;
  return count<=0?[]:init(count, (x) => x+min);
}
function New(firstName, lastName, pets){
  return{
    firstName:firstName, 
    lastName:lastName, 
    pets:pets
  };
}
function Run(f, p){
  return Map((x) => {
    f(x);
    return x;
  }, p);
}
function Render(renderFunction, p){
  const x=p.render(renderFunction);
  return _c_3.Append(_c_3.EmbedView(Map_1(() => _c_3.Empty, p.view)), x);
}
function Return(value){
  return New_2(Id(), Const(Success(value)), (x) => x);
}
function Yield(init_2){
  return YieldVar(_c_9.Create_1(init_2));
}
function Many(init_2, addValue, itemForm){
  const m=new _c_8(itemForm, init_2, itemForm(addValue), addValue);
  return New_2(Id(), m.out, (f) => f(m));
}
function WithSubmit(p){
  const submitter=new _c_5(p.view, Failure(_c_10.Empty));
  return New_2(Id(), submitter.view, (r) =>(p.render(r))(submitter));
}
function Map(f, p){
  return MapResult((a) => Map_2(f, a), p);
}
function Apply(pf, px){
  let _1=Id();
  let _2=Map2(Apply_1, pf.view, px.view);
  const f=pf.render;
  const g=px.render;
  return New_2(_1, _2, (x) => g(f(x)));
}
function YieldVar(var_1){
  return New_2(var_1.Id, Map_1(Success, var_1.View), (r) => r(var_1));
}
function MapResult(f, p){
  return New_2(p.id, Map_1(f, p.view), p.render);
}
function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
function map(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new _c_2(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function append(s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const first=[true];
    return new _c_2(e1, null, (x) => {
      if(x.s.MoveNext()){
        x.c=x.s.Current;
        return true;
      }
      else {
        const x_1=x.s;
        if(!Equals(x_1, null))x_1.Dispose();
        x.s=null;
        return first[0]&&(first[0]=false,x.s=Get(s2),x.s.MoveNext()?(x.c=x.s.Current,true):(x.s.Dispose(),x.s=null,false));
      }
    }, (x) => {
      const x_1=x.s;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function head(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function findIndex(p, s){
  const m=tryFindIndex(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function fold(f, x, s){
  let r=x;
  const e=Get(s);
  try {
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function tryFindIndex(ok, s){
  const e=Get(s);
  try {
    let loop=true;
    let i=0;
    while(loop&&e.MoveNext())
      if(ok(e.Current))loop=false;
      else i=i+1;
    return loop?null:Some(i);
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function collect(f, s){
  return concat(map(f, s));
}
function concat(ss){
  return{GetEnumerator:() => {
    const outerE=Get(ss);
    function next(st){
      while(true)
        {
          const m=st.s;
          if(Equals(m, null)){
            if(outerE.MoveNext()){
              st.s=Get(outerE.Current);
              st=st;
            }
            else {
              outerE.Dispose();
              return false;
            }
          }
          else if(m.MoveNext()){
            st.c=m.Current;
            return true;
          }
          else {
            st.Dispose();
            st.s=null;
            st=st;
          }
        }
    }
    return new _c_2(null, null, next, (st) => {
      const x=st.s;
      if(!Equals(x, null))x.Dispose();
      if(!Equals(outerE, null))outerE.Dispose();
    });
  }};
}
function init(n, f){
  return take(n, initInfinite(f));
}
function take(n, s){
  n<0?nonNegative():void 0;
  return{GetEnumerator:() => {
    const e=[Get(s)];
    return new _c_2(0, null, (o) => {
      o.s=o.s+1;
      if(o.s>n)return false;
      else {
        const en=e[0];
        return Equals(en, null)?insufficient():en.MoveNext()?(o.c=en.Current,o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,insufficient());
      }
    }, () => {
      const x=e[0];
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
function initInfinite(f){
  return{GetEnumerator:() => new _c_2(0, null, (e) => {
    e.c=f(e.s);
    e.s=e.s+1;
    return true;
  }, void 0)};
}
function forall(p, s){
  return!exists((x) =>!p(x), s);
}
function max(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===1)m=x;
      }
    return m;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function exists(p, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=p(e.Current);
    return r;
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
}
function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
function New_1(Category, name){
  return{Category:Category, name:name};
}
function concat_1(separator, strings){
  return ofSeq(strings).join(separator);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function StartsWith(t, s){
  return t.substring(0, s.length)==s;
}
function Split(s, pat, opts){
  return opts===1?filter((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
function forall_1(f, s){
  return forall(f, protect(s));
}
function SplitWith(str, pat){
  return str.split(pat);
}
function protect(s){
  return s==null?"":s;
}
function op_LessMultiplyGreater(pf, px){
  return Apply(pf, px);
}
function IsNotEmpty(msg, p){
  return Is((x) => x!="", msg, p);
}
function Is(pred, msg, p){
  return MapResult((res) => res.$==1?res:pred(res.$0)?res:Failure(ofArray([new _c_13(p.id, msg)])), p);
}
let _c=Lazy((_i) => class Category {
  static {
    _c=_i(this);
  }
  static Hobbies=Create_1(_c, {$:0});
  toString(){
    return this.$==1?"Career":this.$==2?"Lifestyle":"Hobbies";
  }
  static Career=Create_1(_c, {$:1});
  static Lifestyle=Create_1(_c, {$:2});
});
function Get(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):x.GetEnumerator();
}
function ArrayEnumerator(s){
  return new _c_2(0, null, (e) => {
    const i=e.s;
    return i<length(s)&&(e.c=get(s, i),e.s=i+1,true);
  }, void 0);
}
function StringEnumerator(s){
  return new _c_2(0, null, (e) => {
    const i=e.s;
    return i<s.length&&(e.c=s[i],e.s=i+1,true);
  }, void 0);
}
function Get0(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
}
let _c_1=Lazy((_i) => class Object_1 {
  static {
    _c_1=_i(this);
  }
  Equals(obj){
    return this===obj;
  }
  GetHashCode(){
    return -1;
  }
});
let _c_2=Lazy((_i) => class T extends _c_1 {
  static {
    _c_2=_i(this);
  }
  s;
  c;
  n;
  d;
  e;
  Dispose(){
    if(this.d)this.d(this);
  }
  MoveNext(){
    const m=this.n(this);
    this.e=m?1:2;
    return m;
  }
  get Current(){
    return this.e===1?this.c:this.e===0?FailWith("Enumeration has not started. Call MoveNext."):FailWith("Enumeration already finished.");
  }
  constructor(s, c, n, d){
    super();
    this.s=s;
    this.c=c;
    this.n=n;
    this.d=d;
    this.e=0;
  }
});
function New_2(id, view, render){
  return{
    id:id, 
    view:view, 
    render:render
  };
}
let _c_3=Lazy((_i) => class Doc extends _c_1 {
  static {
    _c_3=_i(this);
  }
  docNode;
  updates;
  static Append(a, b){
    return _c_3.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
  }
  static get Empty(){
    return _c_3.Mk(null, Const());
  }
  static RunById(id, tr){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c_3.Run(m, tr);
  }
  static Mk(node, updates){
    return new Doc(node, updates);
  }
  static EmbedView(view){
    const node=CreateEmbedNode();
    return _c_3.Mk(EmbedDoc(node), Map_1(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static TextNode(v){
    return _c_3.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static Input(attr, var_1){
    return _c_3.InputInternal("input", () => append(attr, [Value(var_1)]));
  }
  static Concat(xs){
    return TreeReduce(_c_3.Empty, _c_3.Append, ofSeqNonCopying(xs));
  }
  static Button(caption, attrs, action){
    const attrs_1=_c_12.Concat(attrs);
    return _c_22.New(_c_3.Clickable("button", action), attrs_1, _c_3.TextNode(caption));
  }
  static Run(parent, doc){
    LinkElement(parent, doc.docNode);
    _c_3.RunInPlace(false, parent, doc);
  }
  static Element(name, attr, children){
    const a=_c_12.Concat(attr);
    const a_1=_c_3.Concat(children);
    return _c_22.New(globalThis.document.createElement(name), a, a_1);
  }
  static InputInternal(elemTy, attr){
    const el=globalThis.document.createElement(elemTy);
    return _c_22.New(el, _c_12.Concat(attr(el)), _c_3.Empty);
  }
  static ConvertBy(key, render, view){
    return _c_3.Flatten(MapSeqCachedBy(key, render, view));
  }
  static Radio(attrs, value, var_1){
    const el=globalThis.document.createElement("input");
    el.addEventListener("click", () => var_1.Set(value), false);
    const valAttr=DynamicProp("checked", Map_1((x) => Equals(x, value), var_1.View));
    return _c_22.New(el, _c_12.Concat(append_1(ofArray([_c_12.Create("type", "radio"), _c_12.Create("name", var_1.Id), valAttr]), ofSeq_1(attrs))), _c_3.Empty);
  }
  static Clickable(elem, action){
    const el=globalThis.document.createElement(elem);
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      return action();
    }, false);
    return el;
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static Flatten(view){
    return _c_3.EmbedView(Map_1(_c_3.Concat, view));
  }
  constructor(docNode, updates){
    super();
    this.docNode=docNode;
    this.updates=updates;
  }
});
function Map_1(fn, a){
  return CreateLazy(() => Map_3(fn, a()));
}
function Const(x){
  const o={s:Forever(x)};
  return() => o;
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
function CreateLazy(observe){
  const lv={c:null, o:observe};
  return() => {
    let c=lv.c;
    if(c===null){
      c=lv.o();
      lv.c=c;
      const _1=c.s;
      if(_1!=null&&_1.$==0)lv.o=null;
      else WhenObsoleteRun(c, () => {
        lv.c=null;
      });
      return c;
    }
    else return c;
  };
}
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
function Bind(fn, view){
  return Join(Map_1(fn, view));
}
function SnapshotOn(def, a, a_1){
  const sInit={s:Ready(def, [])};
  return CreateLazy(() => sInit.s==null?SnapshotOn_1(a(), a_1()):(WhenObsolete(a(), sInit),sInit));
}
function Join(a){
  return CreateLazy(() => Join_1(a()));
}
function MapSeqCachedBy(key, conv, view){
  const state=[new _c_15("New_5")];
  return Map_1((xs) => {
    const prevState=state[0];
    const newState=new _c_15("New_5");
    const result=mapInPlace((x) => {
      const k=key(x);
      const res=prevState.ContainsKey(k)?prevState.Item(k):conv(x);
      newState.set_Item(k, res);
      return res;
    }, ofSeq(xs));
    state[0]=newState;
    return result;
  }, view);
}
function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
let _c_4=Lazy((_i) => class attr extends _c_1 {
  static {
    _c_4=_i(this);
  }
});
function Through_1(input, v){
  return Map_1((x) => x.$==1?Failure(filter_1((m) => m.id==v.Id, x.$0)):x, input);
}
let _c_5=Lazy((_i) => class Submitter extends _c_1 {
  static {
    _c_5=_i(this);
  }
  input;
  u0076ar;
  view;
  Trigger(){
    this.u0076ar.Set(null);
  }
  constructor(input, init_2){
    super();
    this.input=input;
    this.u0076ar=_c_9.Create();
    this.view=SnapshotOn(init_2, this.u0076ar.View, this.input);
  }
});
let _c_6=Lazy((_i) => class Collection extends _c_1 {
  static {
    _c_6=_i(this);
  }
  p;
  adder;
  arr;
  u0076ar;
  changesView;
  out;
  Render(f){
    return _c_3.ConvertBy((_1) => _1[2], (_1) => _1[0].render(f(_1[1])), this.changesView);
  }
  add(x){
    this.arr.push(this.mk(x));
    _c_9.Update(this.u0076ar, (x_1) => x_1);
  }
  mk(x){
    const ident=(Int_1())();
    const getThisIndexIn=(s) => findIndex((_1) => ident===_1[2], s);
    const vIndex=Map_1(getThisIndexIn, this.u0076ar.View);
    const sMoveUp=new _c_5(Map_1((i) => i===0?Failure(_c_10.Empty):Success(true), vIndex), length(this.arr)===0?Failure(_c_10.Empty):Success(false));
    const vMoveUp=Map_1((a) => {
      if(a.$==0)if(a.$0){
        const i=getThisIndexIn(this.arr);
        List_1_Swap(this.arr, i, i-1);
        _c_9.Update(this.u0076ar, (x_1) => x_1);
      }
    }, sMoveUp.view);
    const sMoveDown=new _c_5(Map_1((i) => i===length(this.arr)-1?Failure(_c_10.Empty):Success(true), vIndex), Failure(_c_10.Empty));
    const vMoveDown=Map_1((a) => {
      if(a.$==0)if(a.$0){
        const i=getThisIndexIn(this.arr);
        List_1_Swap(this.arr, i, i+1);
        _c_9.Update(this.u0076ar, (x_1) => x_1);
      }
    }, sMoveDown.view);
    const p=this.p(x);
    return[New_2(p.id, Map2((_1) => _1, p.view, Map2(() => null, vMoveUp, vMoveDown)), p.render), new _c_7(() => {
      let start=getThisIndexIn(this.arr);
      this.arr.splice(start, 1);
      _c_9.Update(this.u0076ar, (x_1) => x_1);
    }, sMoveUp, sMoveDown), ident];
  }
  fst3(x, a, a_1){
    return x;
  }
  constructor(p, inits, adder){
    super();
    this.p=p;
    this.adder=adder;
    this.arr=MarkResizable([]);
    this.u0076ar=_c_9.Create_1(this.arr);
    const o=this.arr;
    const g=(a) => {
      o.push(a);
    };
    iter((x) => g(this.mk(x)), inits);
    this.changesView=Bind((arr) => MapTreeReduce((x) => Map_1(() =>[x], this.fst3(x[0], x[1], x[2]).view), Const([]), (_1, _2) => Map2(append, _1, _2), arr.slice()), this.u0076ar.View);
    this.out=Bind((s) => MapTreeReduce((_1) => {
      const a=(v) =>[v];
      return Map_1((a_1) => Map_2(a, a_1), _1[0].view);
    }, Const(Success([])), (_1, _2) => Map2((_3, _4) => Append(append, _3, _4), _1, _2), s.slice()), this.u0076ar.View);
  }
});
function ButtonValidate(caption, attrs, submitter){
  return _c_3.Element("button", append([SubmitterValidate(submitter)], attrs), [_c_3.TextNode(caption)]);
}
let _c_7=Lazy((_i) => class ItemOperations extends _c_1 {
  static {
    _c_7=_i(this);
  }
  u0064elete;
  moveUp;
  moveDown;
  constructor(delete_1, moveUp, moveDown){
    super();
    this.u0064elete=delete_1;
    this.moveUp=moveUp;
    this.moveDown=moveDown;
  }
});
let _c_8=Lazy((_i) => {
  Force(_c_6);
  return class CollectionWithDefault extends _c_6 {
    static {
      _c_8=_i(this);
    }
    u0064efault;
    AddOne(){
      this.add(this.u0064efault);
    }
    constructor(p, inits, pInit, __default__){
      super(p, inits, pInit);
      this.u0064efault=__default__;
    }
  };
});
function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
}
function LocalTemplatesLoaded(){
  return _c_17.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_17.LocalTemplatesLoaded=_1;
}
function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new _c_15("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _1=wsTemplates.length-1;i<=_1;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _2=wsChildrenTemplates.length-1;i_1<=_2;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _3=html5TemplateBasedTemplates.length-1;i_2<=_3;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _4=html5TemplateBasedTemplates_1.length-1;i_3<=_4;i_3++){
    const node_3=html5TemplateBasedTemplates_1[i_3];
    rawTpls.set_Item(node_3.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(node_3));
  }
  const instantiated=new _c_18("New_3");
  function prepareTemplate(name_2){
    if(!loadedTpls.ContainsKey(name_2)){
      let o;
      const m=(o=null,[rawTpls.TryGetValue(name_2, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        instantiated.SAdd(name_2);
        rawTpls.RemoveKey(name_2);
        PrepareTemplateStrict(baseName, Some(name_2), m[1], Some(prepareTemplate));
      }
      else console.warn(instantiated.Contains(name_2)?"Encountered loop when instantiating "+name_2:"Local template does not exist: "+name_2);
    }
  }
  while(rawTpls.count>0)
    prepareTemplate(head(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_17.LoadedTemplates;
}
function LoadedTemplateFile(name){
  let o;
  const m=(o=null,[LoadedTemplates().TryGetValue(name, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  if(m[0])return m[1];
  else {
    const d=new _c_15("New_5");
    LoadedTemplates().set_Item(name, d);
    return d;
  }
}
function FakeRootSingle(el){
  el.removeAttribute("ws-template");
  const m=el.getAttribute("ws-replace");
  if(m==null){ }
  else {
    el.removeAttribute("ws-replace");
    const m_1=el.parentNode;
    if(Equals(m_1, null)){ }
    else {
      const n=globalThis.document.createElement(el.tagName);
      n.setAttribute("ws-replace", m);
      m_1.replaceChild(n, el);
    }
  }
  const fakeroot=globalThis.document.createElement("div");
  fakeroot.appendChild(el);
  return fakeroot;
}
function FakeRoot(parent){
  const fakeroot=globalThis.document.createElement("div");
  while(parent.hasChildNodes())
    fakeroot.appendChild(parent.firstChild);
  return fakeroot;
}
function FakeRootFromHTMLTemplate(parent){
  const fakeroot=globalThis.document.createElement("div");
  const content=parent.content;
  for(let i=0, _1=content.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new _c_18("New_3");
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!==null){
            const next=_1.nextSibling;
            if(Equals(_1.nodeType, Node.TEXT_NODE))convertTextNode(_1);
            else if(Equals(_1.nodeType, Node.ELEMENT_NODE))convertElement(_1);
            _1=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_1.nodeName, Some(3), null).toLowerCase();
          const m=name_2.indexOf(".");
          const p=m===-1?[baseName, name_2]:[string(name_2, null, Some(m-1)), string(name_2, Some(m+1), null)];
          const instName=p[1];
          const instBaseName=p[0];
          if(instBaseName!=""&&!LoadedTemplates().ContainsKey(instBaseName))return failNotLoaded(instName);
          else {
            if(instBaseName==""&&prepareLocalTemplate!=null)prepareLocalTemplate.$0(instName);
            const d=LoadedTemplates().Item(instBaseName);
            if(!d.ContainsKey(instName))return failNotLoaded(instName);
            else {
              const t=d.Item(instName);
              const instance=t.cloneNode(true);
              const usedHoles=new _c_18("New_3");
              const mappings=new _c_15("New_5");
              const attrs=_1.attributes;
              for(let i=0, _4=attrs.length-1;i<=_4;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _2=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _2);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _5=_1.childNodes.length-1;i_1<=_5;i_1++){
                const n=_1.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_1.childNodes.length===1&&Equals(_1.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _1.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(a) => usedHoles_1.SAdd(a))(usedHoles);
                let _3=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _3(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _6=_1.childNodes.length-1;i_2<=_6;i_2++){
                  const n_1=_1.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _1.parentNode, _1);
              _1.parentNode.removeChild(_1);
              return;
            }
          }
          break;
      }
  }
  function fillDocHole(instance, fillWith){
    const name_2=fillWith.nodeName.toLowerCase();
    const fillHole=(p, n) => {
      if(name_2=="title"&&fillWith.hasChildNodes()){
        const parsed=ParseHTMLIntoFakeRoot(fillWith.textContent);
        fillWith.removeChild(fillWith.firstChild);
        while(parsed.hasChildNodes())
          fillWith.appendChild(parsed.firstChild);
      }
      convertElement(fillWith);
      return fill(fillWith, p, n);
    };
    foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
      const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
      for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _1=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _1);
      }
    });
    const m=instance.querySelector("[ws-hole="+name_2+"]");
    if(Equals(m, null)){
      const m_1=instance.querySelector("[ws-replace="+name_2+"]");
      if(Equals(m_1, null)){
        const m_2=instance.querySelector("slot[name="+name_2+"]");
        return instance.tagName.toLowerCase()=="template"?(fillHole(m_2.parentNode, m_2),void m_2.parentNode.removeChild(m_2)):null;
      }
      else {
        fillHole(m_1.parentNode, m_1);
        m_1.parentNode.removeChild(m_1);
        return;
      }
    }
    else {
      while(m.hasChildNodes())
        m.removeChild(m.lastChild);
      m.removeAttribute("ws-hole");
      return fillHole(m, null);
    }
  }
  function convertElement(el){
    if(!el.hasAttribute("ws-preserve"))if(StartsWith(el.nodeName.toLowerCase(), "ws-"))convertInstantiation(el);
    else {
      convertAttrs(el);
      convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n){
    return recF(0, n);
  }
  function convertInstantiation(el){
    return recF(1, el);
  }
  function convertNestedTemplates(el){
    while(true)
      {
        const m=el.querySelector("[ws-template]");
        if(Equals(m, null)){
          const m_1=el.querySelector("[ws-children-template]");
          if(Equals(m_1, null)){
            const idTemplates=el.querySelectorAll("template[id]");
            for(let i=1, _1=idTemplates.length-1;i<=_1;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _2=nameTemplates.length-1;i_1<=_2;i_1++){
              const n_1=nameTemplates[i_1];
              if(processedHTML5Templates.Contains(n_1)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n_1.getAttribute("name")), n_1, null);
                processedHTML5Templates.SAdd(n_1);
              }
            }
            return null;
          }
          else {
            const name_2=m_1.getAttribute("ws-children-template");
            m_1.removeAttribute("ws-children-template");
            PrepareTemplateStrict(baseName, Some(name_2), m_1, null);
            el=el;
          }
        }
        else {
          const name_3=m.getAttribute("ws-template");
          (PrepareSingleTemplate(baseName, Some(name_3), m))(null);
          el=el;
        }
      }
  }
  const name_1=(name==null?"":name.$0).toLowerCase();
  LoadedTemplateFile(baseName).set_Item(name_1, fakeroot);
  if(fakeroot.hasChildNodes()){
    convertNestedTemplates(fakeroot);
    convertNodeAndSiblings(fakeroot.firstChild);
  }
}
function foreachNotPreserved(root, selector, f){
  IterSelector(root, selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function PrepareSingleTemplate(baseName, name, el){
  const root=FakeRootSingle(el);
  return(p) => {
    PrepareTemplateStrict(baseName, name, root, p);
  };
}
function TextHoleRE(){
  return _c_17.TextHoleRE;
}
function NewFromSeq(fields){
  const r={};
  const e=Get(fields);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        r[f[0]]=f[1];
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  return r;
}
function Id(){
  (lastId())[0]++;
  return"Form"+String((lastId())[0]);
}
function lastId(){
  return _c_20.lastId;
}
function Success(Item){
  return{$:0, $0:Item};
}
function Failure(Item){
  return{$:1, $0:Item};
}
let _c_9=Lazy((_i) => class Var extends _c_1 {
  static {
    _c_9=_i(this);
  }
  static Create_1(v){
    return new _c_16(false, {s:Ready(v, [])}, v);
  }
  static Create(){
    return new _c_16(false, {s:Ready(null, [])}, null);
  }
  static Update(var_1, fn){
    _c_9.Set(var_1, fn(var_1.Get()));
  }
  static Set(var_1, value){
    var_1.Set(value);
  }
  static { }
});
let _c_10=Lazy((_i) => class FSharpList {
  static {
    _c_10=_i(this);
  }
  static Empty=Create_1(_c_10, {$:0});
  static Cons(Head, Tail){
    return Create_1(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  GetEnumerator(){
    return new _c_2(this, null, (e) => {
      const m=e.s;
      return m.$==0?false:(e.c=m.$0,e.s=m.$1,true);
    }, void 0);
  }
});
function Map_2(f, r){
  return r.$==1?Failure(r.$0):Success(f(r.$0));
}
function Apply_1(rf, rx){
  return rf.$==0?rx.$==0?Success(rf.$0(rx.$0)):Failure(rx.$0):rx.$==0?Failure(rf.$0):Failure(append_1(rf.$0, rx.$0));
}
function IsFailure(r){
  return r.$==1;
}
function Append(app, r1, r2){
  return r1.$==0?r2.$==0?Success(app(r1.$0, r2.$0)):r2:r2.$==0?r1:Failure(append_1(r1.$0, r2.$0));
}
function get(arr, n){
  checkBounds(arr, n);
  return arr[n];
}
function length(arr){
  return arr.dims===2?arr.length*arr.length:arr.length;
}
function checkBounds(arr, n){
  if(n<0||n>=arr.length)FailWith("Index was outside the bounds of the array.");
}
function set(arr, n, x){
  checkBounds(arr, n);
  arr[n]=x;
}
function Equals(a, b){
  if(a===b)return true;
  else {
    const m=typeof a;
    if(m=="object"){
      if(a===null||a===void 0||b===null||b===void 0||!Equals(typeof b, "object"))return false;
      else if("Equals"in a)return a.Equals(b);
      else if("Equals"in b)return false;
      else if(a instanceof Array&&b instanceof Array)return arrayEquals(a, b);
      else if(a instanceof Date&&b instanceof Date)return dateEquals(a, b);
      else {
        const eqR=[true];
        let k;
        for(var k_2 in a)if(((k_3) => {
          eqR[0]=!a.hasOwnProperty(k_3)||b.hasOwnProperty(k_3)&&Equals(a[k_3], b[k_3]);
          return!eqR[0];
        })(k_2))break;
        if(eqR[0]){
          let k_1;
          for(var k_3 in b)if(((k_4) => {
            eqR[0]=!b.hasOwnProperty(k_4)||a.hasOwnProperty(k_4);
            return!eqR[0];
          })(k_3))break;
        }
        return eqR[0];
      }
    }
    else return m=="function"&&("$Func"in a?a.$Func===b.$Func&&a.$Target===b.$Target:"$Invokes"in a&&"$Invokes"in b&&arrayEquals(a.$Invokes, b.$Invokes));
  }
}
function arrayEquals(a, b){
  let eq;
  let i;
  if(length(a)===length(b)){
    eq=true;
    i=0;
    while(eq&&i<length(a))
      {
        !Equals(get(a, i), get(b, i))?eq=false:void 0;
        i=i+1;
      }
    return eq;
  }
  else return false;
}
function dateEquals(a, b){
  return a.getTime()===b.getTime();
}
function Hash(o){
  const m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?hashString(o):m=="object"?o==null?0:o instanceof Array?hashArray(o):hashObject(o):0;
}
function hashString(s){
  let hash;
  if(s===null)return 0;
  else {
    hash=5381;
    for(let i=0, _1=s.length-1;i<=_1;i++)hash=hashMix(hash, s[i].charCodeAt());
    return hash;
  }
}
function hashArray(o){
  let h=-34948909;
  for(let i=0, _1=length(o)-1;i<=_1;i++)h=hashMix(h, Hash(get(o, i)));
  return h;
}
function hashObject(o){
  if("GetHashCode"in o)return o.GetHashCode();
  else {
    const h=[0];
    let k;
    for(var k_1 in o)if(((key) => {
      h[0]=hashMix(hashMix(h[0], hashString(key)), Hash(o[key]));
      return false;
    })(k_1))break;
    return h[0];
  }
}
function hashMix(x, y){
  return(x<<5)+x+y;
}
function Compare(a, b){
  if(a===b)return 0;
  else {
    const m=typeof a;
    switch(m=="function"?1:m=="boolean"?2:m=="number"?2:m=="string"?2:m=="object"?3:0){
      case 0:
        return typeof b=="undefined"?0:-1;
      case 1:
        return FailWith("Cannot compare function values.");
      case 2:
        return a<b?-1:1;
      case 3:
        if(a===null)return -1;
        else if(b===null)return 1;
        else if("CompareTo"in a)return a.CompareTo(b);
        else if("CompareTo0"in a)return a.CompareTo0(b);
        else if(a instanceof Array&&b instanceof Array)return compareArrays(a, b);
        else if(a instanceof Date&&b instanceof Date)return compareDates(a, b);
        else {
          const cmp=[0];
          let k;
          for(var k_2 in a)if(((k_3) =>!a.hasOwnProperty(k_3)?false:!b.hasOwnProperty(k_3)?(cmp[0]=1,true):(cmp[0]=Compare(a[k_3], b[k_3]),cmp[0]!==0))(k_2))break;
          if(cmp[0]===0){
            let k_1;
            for(var k_3 in b)if(((k_4) =>!b.hasOwnProperty(k_4)?false:!a.hasOwnProperty(k_4)&&(cmp[0]=-1,true))(k_3))break;
          }
          return cmp[0];
        }
        break;
    }
  }
}
function compareArrays(a, b){
  let cmp;
  let i;
  if(length(a)<length(b))return -1;
  else if(length(a)>length(b))return 1;
  else {
    cmp=0;
    i=0;
    while(cmp===0&&i<length(a))
      {
        cmp=Compare(get(a, i), get(b, i));
        i=i+1;
      }
    return cmp;
  }
}
function compareDates(a, b){
  return Compare(a.getTime(), b.getTime());
}
function ofSeq(xs){
  if(xs instanceof Array)return xs.slice();
  else if(xs instanceof _c_10)return ofList(xs);
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      if(typeof o=="object"&&isIDisposable(o))o.Dispose();
    }
  }
}
function ofList(xs){
  const q=[];
  let l=xs;
  while(!(l.$==0))
    {
      q.push(head_1(l));
      l=tail(l);
    }
  return q;
}
function exists_1(f, x){
  let e=false;
  let i=0;
  while(!e&&i<length(x))
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
}
function tryPick(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      const m=f(arr[i]);
      if(m!=null&&m.$==1)res=m;
      i=i+1;
    }
  return res;
}
function tryFindIndex_1(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(i):void 0;
      i=i+1;
    }
  return res;
}
function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function map_1(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
  return r;
}
function iter_1(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
function concat_2(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
function pick(f, arr){
  const m=tryPick(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function choose(f, arr){
  const q=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
  }
  return q;
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=value;
  return r;
}
function init_1(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=f(i);
  return r;
}
function forall_2(f, x){
  let a=true;
  let i=0;
  while(a&&i<length(x))
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
let _c_11=Lazy((_i) => class View {
  static {
    _c_11=_i(this);
  }
});
function AppendDoc(Item1, Item2){
  return{
    $:0, 
    $0:Item1, 
    $1:Item2
  };
}
function EmbedDoc(Item){
  return{$:2, $0:Item};
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function ElemDoc(Item){
  return{$:1, $0:Item};
}
function Map_3(fn, sn){
  const m=sn.s;
  if(m!=null&&m.$==0)return{s:Forever(fn(m.$0))};
  else {
    const res={s:Waiting([], [])};
    When(sn, (a) => {
      MarkDone(res, sn, fn(a));
    }, res);
    return res;
  }
}
function Map2Unit_1(sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(null)}:sn2;
  else if(_2!=null&&_2.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function WhenObsoleteRun(snap, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?m.$1.push(obs):m!=null&&m.$==3?m.$1.push(obs):void 0;
}
function When(snap, avail, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?(EnqueueSafe(m.$1, obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),EnqueueSafe(m.$1, obs)):avail(m.$0);
}
function MarkDone(res, sn, v){
  const _1=sn.s;
  if(_1!=null&&_1.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
function Map2_1(fn, sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(fn(_1.$0, _2.$0))}:Map2Opt1(fn, _1.$0, sn2);
  else if(_2!=null&&_2.$==0)return Map2Opt2(fn, _2.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, fn(_3.$0[0], _4.$0[0]));
        else MarkReady(res, fn(_3.$0[0], _4.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function ValueAndForever(snap){
  const m=snap.s;
  return m!=null&&m.$==0?Some([m.$0, true]):m!=null&&m.$==2?Some([m.$0, false]):null;
}
function MarkForever(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    sn.s=Forever(v);
    const qa=m.$0;
    for(let i=0, _1=length(qa)-1;i<=_1;i++)(get(qa, i))(v);
  }
  else void 0;
}
function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    sn.s=Ready(v, m.$1);
    const qa=m.$0;
    for(let i=0, _1=length(qa)-1;i<=_1;i++)(get(qa, i))(v);
  }
  else void 0;
}
function EnqueueSafe(q, x){
  q.push(x);
  if(q.length%20===0){
    const qcopy=q.slice(0);
    Clear(q);
    for(let i=0, _1=length(qcopy)-1;i<=_1;i++){
      const o=get(qcopy, i);
      if(typeof o=="object")(((sn) => {
        if(sn.s)q.push(sn);
      })(o));
      else(((f) => {
        q.push(f);
      })(o));
    }
  }
  else void 0;
}
function Map2Opt1(fn, x, sn2){
  return Map_3((y) => fn(x, y), sn2);
}
function Map2Opt2(fn, y, sn1){
  return Map_3((x) => fn(x, y), sn1);
}
function SnapshotOn_1(sn1, sn2){
  const res={s:Waiting([], [])};
  const cont=() => {
    const m=res.s;
    if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
      const _1=ValueAndForever(sn1);
      const _2=ValueAndForever(sn2);
      if(_1!=null&&_1.$==1)_2!=null&&_2.$==1?_1.$0[1]||_2.$0[1]?MarkForever(res, _2.$0[0]):MarkReady(res, _2.$0[0]):void 0;
    }
  };
  When(sn1, cont, res);
  WhenReady(sn2, cont);
  return res;
}
function WhenObsolete(snap, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?EnqueueSafe(m.$1, obs):m!=null&&m.$==3?EnqueueSafe(m.$1, obs):void 0;
}
function Join_1(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
}
function WhenRun(snap, avail, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?(m.$1.push(obs),avail(m.$0)):m!=null&&m.$==3?(m.$0.push(avail),m.$1.push(obs)):avail(m.$0);
}
function WhenReady(snap, avail){
  let _1;
  const m=snap.s;
  switch(m!=null&&m.$==2?(_1=m.$0,0):m==null?1:m!=null&&m.$==3?2:(_1=m.$0,0)){
    case 0:
      avail(_1);
      break;
    case 1:
      null;
      break;
    case 2:
      m.$0.push(avail);
      break;
  }
}
function Copy(sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Waiting([], [])};
    When(sn, (v) => {
      MarkDone(res_1, sn, v);
    }, res_1);
    return res_1;
  }
  else return sn;
}
let _c_12=Lazy((_i) => class Attr {
  static {
    _c_12=_i(this);
  }
  static Create(name, value){
    return Static((el) => {
      el.setAttribute(name, value);
    });
  }
  static Append(a, b){
    return AppendTree(a, b);
  }
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), _c_12.Append, x);
  }
  static A3(init_2){
    return Create_1(Attr, {$:3, $0:init_2});
  }
  static A2(Item1, Item2){
    return Create_1(Attr, {
      $:2, 
      $0:Item1, 
      $1:Item2
    });
  }
  static A1(Item){
    return Create_1(Attr, {$:1, $0:Item});
  }
});
let _c_13=Lazy((_i) => class ErrorMessage extends _c_1 {
  static {
    _c_13=_i(this);
  }
  id;
  message;
  constructor(id, message){
    super();
    this.id=id;
    this.message=message;
  }
});
function filter_1(p, x){
  let res;
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    res=_c_10.Empty;
    r=res;
    l=x;
    go=true;
    while(go)
      {
        if(p(l.$0)){
          if(res.$==0){
            res=Create_1(_c_10, {$:1});
            r=res;
          }
          else {
            const t=Create_1(_c_10, {$:1});
            r=(r.$1=t,t);
          }
          const v=l.$0;
          r.$=1;
          r.$0=v;
        }
        l=l.$1;
        if(l.$==0)go=false;
      }
    if(!(res.$==0))r.$1=_c_10.Empty;
    return res;
  }
}
function ofArray(arr){
  let r=_c_10.Empty;
  for(let i=length(arr)-1, _1=0;i>=_1;i--)r=_c_10.Cons(get(arr, i), r);
  return r;
}
function ofSeq_1(s){
  if(s instanceof _c_10)return s;
  else if(s instanceof Array)return ofArray(s);
  else {
    const e=Get(s);
    try {
      let r;
      let go=e.MoveNext();
      if(!go)return _c_10.Empty;
      else {
        const res=Create_1(_c_10, {$:1});
        r=res;
        while(go)
          {
            r.$0=e.Current;
            if(e.MoveNext()){
              const t=Create_1(_c_10, {$:1});
              r=(r.$1=t,t);
            }
            else go=false;
          }
        r.$1=_c_10.Empty;
        return res;
      }
    }
    finally {
      if(typeof e=="object"&&isIDisposable(e))e.Dispose();
    }
  }
}
function append_1(x, y){
  let r;
  let l;
  let go;
  if(x.$==0)return y;
  else if(y.$==0)return x;
  else {
    const res=Create_1(_c_10, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=l.$0;
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create_1(_c_10, {$:1});
          r=(r.$1=t,t);
        }
      }
    r.$1=y;
    return res;
  }
}
function head_1(l){
  return l.$==1?l.$0:listEmpty();
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
let _c_14=Lazy((_i) => class Var extends _c_1 {
  static {
    _c_14=_i(this);
  }
});
function SubmitterValidate(submitter){
  let _1=Handler("click", () =>() => submitter.Trigger());
  const view=Const("disabled");
  let _2=DynamicPred("disabled", Map_1(IsFailure, submitter.input), view);
  return _c_12.Append(_1, _2);
}
let _c_15=Lazy((_i) => class Dictionary extends _c_1 {
  static {
    _c_15=_i(this);
  }
  equals;
  hash;
  count;
  data;
  set_Item(k, v){
    this.set(k, v);
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
  }
  TryGetValue(k, res){
    const d=this.data[this.hash(k)];
    if(d==null)return false;
    else {
      const v=tryPick((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  RemoveKey(k){
    return this.remove(k);
  }
  get Keys(){
    return new _c_24(this);
  }
  set(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      const m=tryFindIndex_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      if(m==null){
        this.count=this.count+1;
        d.push({K:k, V:v});
      }
      else d[m.$0]={K:k, V:v};
    }
  }
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  Item(k){
    return this.get(k);
  }
  GetEnumerator(){
    return Get0(concat_2(GetFieldValues(this.data)));
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  static New_5(){
    return new this("New_5");
  }
  static New_6(init_2, equals, hash){
    return new this("New_6", init_2, equals, hash);
  }
  constructor(i, _1, _2, _3){
    if(i=="New_5"){
      i="New_6";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_6"){
      const init_2=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.count=0;
      this.data=[];
      const e=Get(init_2);
      try {
        while(e.MoveNext())
          {
            const x=e.Current;
            this.set(x.K, x.V);
          }
      }
      finally {
        if(typeof e=="object"&&isIDisposable(e))e.Dispose();
      }
    }
  }
});
let _c_16=Lazy((_i) => {
  Force(_c_14);
  return class ConcreteVar extends _c_14 {
    static {
      _c_16=_i(this);
    }
    isConst;
    current;
    snap;
    view;
    id;
    get Id(){
      return"uinref"+String(this.id);
    }
    get View(){
      return this.view;
    }
    Set(v){
      if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
        console.log(s);
      }));
      else {
        Obsolete(this.snap);
        this.current=v;
        this.snap={s:Ready(v, [])};
      }
    }
    Get(){
      return this.current;
    }
    UpdateMaybe(f){
      const m=f(this.Get());
      if(m!=null&&m.$==1)this.Set(m.$0);
    }
    constructor(isConst, initSnap, initValue){
      super();
      this.isConst=isConst;
      this.current=initValue;
      this.snap=initSnap;
      this.view=() => this.snap;
      this.id=Int();
    }
  };
});
function TryParse(s, r){
  return TryParse_2(s, -2147483648, 2147483647, r);
}
function Obsolete(sn){
  let _1;
  const m=sn.s;
  if(m==null||(m!=null&&m.$==2?(_1=m.$1,false):m!=null&&m.$==3?(_1=m.$1,false):true))void 0;
  else {
    sn.s=null;
    for(let i=0, _2=length(_1)-1;i<=_2;i++){
      const o=get(_1, i);
      if(typeof o=="object")(((sn_1) => {
        Obsolete(sn_1);
      })(o));
      else o();
    }
  }
}
function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
function LinkElement(el, children){
  InsertDoc(el, children, null);
}
function InsertDoc(parent, doc, pos){
  while(true)
    {
      if(doc!=null&&doc.$==1)return InsertNode(parent, doc.$0.El, pos);
      else if(doc!=null&&doc.$==2){
        const d=doc.$0;
        d.Dirty=false;
        doc=d.Current;
      }
      else if(doc==null)return pos;
      else if(doc!=null&&doc.$==4)return InsertNode(parent, doc.$0.Text, pos);
      else if(doc!=null&&doc.$==5)return InsertNode(parent, doc.$0, pos);
      else if(doc!=null&&doc.$==6)return foldBack((_1, _2) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_1))(_2), doc.$0.Els, pos);
      else {
        const b=doc.$1;
        const a=doc.$0;
        doc=a;
        pos=InsertDoc(parent, b, pos);
      }
    }
}
function CreateRunState(parent, doc){
  return New_4(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
}
function PerformAnimatedUpdate(childrenOnly, st, doc){
  if(get_UseAnimations()){
    const _1=null;
    return Delay(() => {
      const cur=FindAll(doc);
      const change=ComputeChangeAnim(st, cur);
      const enter=ComputeEnterAnim(st, cur);
      return Bind_1(Play(Append_1(change, ComputeExitAnim(st, cur))), () => Bind_1(SyncElemNodesNextFrame(childrenOnly, st), () => Bind_1(Play(enter), () => {
        st.PreviousNodes=cur;
        return Return_1(null);
      })));
    });
  }
  else return SyncElemNodesNextFrame(childrenOnly, st);
}
function PerformSyncUpdate(childrenOnly, st, doc){
  const cur=FindAll(doc);
  SyncElemNode(childrenOnly, st.Top);
  st.PreviousNodes=cur;
}
function CreateElemNode(el, attr, children){
  LinkElement(el, children);
  const attr_1=Insert(el, attr);
  return _c_21.New(attr_1, children, null, el, Int(), GetOptional(attr_1.OnAfterRender));
}
function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
}
function SyncElemNodesNextFrame(childrenOnly, st){
  if(BatchUpdatesEnabled()){
    const a=(ok) => {
      requestAnimationFrame(() => {
        SyncElemNode(childrenOnly, st.Top);
        ok();
      });
    };
    return FromContinuations((_1, _2, _3) => a.apply(null, [_1, _2, _3]));
  }
  else {
    SyncElemNode(childrenOnly, st.Top);
    return Return_1(null);
  }
}
function ComputeExitAnim(st, cur){
  return Concat(map_1((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
function ComputeEnterAnim(st, cur){
  return Concat(map_1((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
function ComputeChangeAnim(st, cur){
  const a=(n) => HasChangeAnim(n.Attr);
  const relevant=(a_1) => Filter(a, a_1);
  return Concat(map_1((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
}
function SyncElemNode(childrenOnly, el){
  !childrenOnly?SyncElement(el):void 0;
  Sync(el.Children);
  AfterRender(el);
}
function SyncElement(el){
  function hasDirtyChildren(el_1){
    function dirty(doc){
      while(true)
        {
          if(doc!=null&&doc.$==0){
            const b=doc.$1;
            const a=doc.$0;
            if(dirty(a))return true;
            else doc=b;
          }
          else if(doc!=null&&doc.$==2){
            const d=doc.$0;
            if(d.Dirty)return true;
            else doc=d.Current;
          }
          else if(doc!=null&&doc.$==6){
            const t=doc.$0;
            return t.Dirty||exists_1(hasDirtyChildren, t.Holes);
          }
          else return false;
        }
    }
    return dirty(el_1.Children);
  }
  Sync_1(el.El, el.Attr);
  if(hasDirtyChildren(el))DoSyncElement(el);
}
function Sync(doc){
  while(true)
    {
      if(doc!=null&&doc.$==1)return SyncElemNode(false, doc.$0);
      else if(doc!=null&&doc.$==2){
        const n=doc.$0;
        doc=n.Current;
      }
      else if(doc==null)return null;
      else if(doc!=null&&doc.$==5)return null;
      else if(doc!=null&&doc.$==4){
        const d=doc.$0;
        return d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null;
      }
      else if(doc!=null&&doc.$==6){
        const t=doc.$0;
        iter_1((h) => {
          SyncElemNode(false, h);
        }, t.Holes);
        iter_1((t_1) => {
          Sync_1(t_1[0], t_1[1]);
        }, t.Attrs);
        return AfterRender(t);
      }
      else {
        const b=doc.$1;
        const a=doc.$0;
        Sync(a);
        doc=b;
      }
    }
}
function AfterRender(el){
  const m=GetOptional(el.Render);
  if(m!=null&&m.$==1){
    m.$0(el.El);
    SetOptional(el, "Render", null);
  }
}
function DoSyncElement(el){
  const parent=el.El;
  function ins(doc, pos){
    while(true)
      {
        if(doc!=null&&doc.$==1)return doc.$0.El;
        else if(doc!=null&&doc.$==2){
          const d=doc.$0;
          if(d.Dirty){
            d.Dirty=false;
            return InsertDoc(parent, d.Current, pos);
          }
          else doc=d.Current;
        }
        else if(doc==null)return pos;
        else if(doc!=null&&doc.$==4)return doc.$0.Text;
        else if(doc!=null&&doc.$==5)return doc.$0;
        else if(doc!=null&&doc.$==6){
          const t=doc.$0;
          if(t.Dirty)t.Dirty=false;
          return foldBack((_2, _3) => _2==null||_2.constructor===Object?ins(_2, _3):_2, t.Els, pos);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          doc=a;
          pos=ins(b, pos);
        }
      }
  }
  const p=el.El;
  Iter((e) => {
    RemoveNode(p, e);
  }, Except_2(DocChildren(el), Children(el.El, GetOptional(el.Delimiters))));
  let _1=el.Children;
  const m=GetOptional(el.Delimiters);
  ins(_1, m!=null&&m.$==1?m.$0[1]:null);
}
function Static(attr){
  return _c_12.A3(attr);
}
function AppendTree(a, b){
  if(a===null)return b;
  else if(b===null)return a;
  else {
    const x=_c_12.A2(a, b);
    SetFlags(x, Flags(a)|Flags(b));
    return x;
  }
}
function Dynamic(view, set_1){
  return _c_12.A1(new _c_30(view, set_1));
}
function SetFlags(a, f){
  a.flags=f;
}
function Flags(a){
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
}
function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
function EmptyAttr(){
  return _c_25.EmptyAttr;
}
function Insert(elem, tree){
  const nodes=[];
  const oar=[];
  function loop(node){
    while(true)
      {
        if(!(node===null)){
          if(node!=null&&node.$==1)return nodes.push(node.$0);
          else if(node!=null&&node.$==2){
            const b=node.$1;
            const a=node.$0;
            loop(a);
            node=b;
          }
          else return node!=null&&node.$==3?node.$0(elem):node!=null&&node.$==4?oar.push(node.$0):null;
        }
        else return null;
      }
  }
  loop(tree);
  const arr=nodes.slice(0);
  let _1=New_3(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter((f) => {
      f(el);
    }, oar);
  }));
  return _1;
}
function HasExitAnim(attr){
  const flag=2;
  return(attr.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
function HasEnterAnim(attr){
  const flag=1;
  return(attr.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
function HasChangeAnim(attr){
  const flag=4;
  return(attr.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
function GetAnim(dyn, f){
  return Concat(map_1((n) => f(n, dyn.DynElem), dyn.DynNodes));
}
function Sync_1(elem, dyn){
  iter_1((d) => {
    d.NSync(elem);
  }, dyn.DynNodes);
}
function ParseHTMLIntoFakeRoot(elem){
  const root=globalThis.document.createElement("div");
  if(!rhtml().test(elem)){
    root.appendChild(globalThis.document.createTextNode(elem));
    return root;
  }
  else {
    const m=rtagName().exec(elem);
    const tag=Equals(m, null)?"":get(m, 1).toLowerCase();
    const w=(wrapMap())[tag];
    const p=w?w:defaultWrap();
    root.innerHTML=p[1]+elem.replace(rxhtmlTag(), "<$1></$2>")+p[2];
    function unwrap(elt, a){
      while(true)
        {
          if(a===0)return elt;
          else {
            const i=a;
            elt=elt.lastChild;
            a=i-1;
          }
        }
    }
    return unwrap(root, p[0]);
  }
}
function rhtml(){
  return _c_31.rhtml;
}
function wrapMap(){
  return _c_31.wrapMap;
}
function defaultWrap(){
  return _c_31.defaultWrap;
}
function rxhtmlTag(){
  return _c_31.rxhtmlTag;
}
function rtagName(){
  return _c_31.rtagName;
}
function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function InsertAt(parent, pos, node){
  let _1;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _2=Equals(m, null)?null:m;
    _1=pos===_2;
  }
  else _1=false;
  if(!_1)parent.insertBefore(node, pos);
}
function RemoveNode(parent, el){
  if(el.parentNode===parent)parent.removeChild(el);
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function ValueWith(bind, var_1){
  const p=bind(var_1);
  return _c_12.Append(Static(p[0]), DynamicCustom(p[1], p[2]));
}
function DynamicProp(name, view){
  return Dynamic(view, (el) =>(v) => {
    el[name]=v;
  });
}
function DynamicPred(name, predView, valView){
  return Dynamic(Map2((_1, _2) =>[_1, _2], predView, valView), (_1) =>(_2) => _2[0]?_1.setAttribute(name, _2[1]):_1.removeAttribute(name));
}
function Handler(name, callback){
  return Static((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
function DynamicCustom(set_1, view){
  return Dynamic(view, set_1);
}
function ofSeqNonCopying(xs){
  if(xs instanceof Array)return xs;
  else if(xs instanceof _c_10)return ofList(xs);
  else if(xs===null)return[];
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      if(typeof o=="object"&&isIDisposable(o))o.Dispose();
    }
  }
}
function TreeReduce(defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return get(array, off);
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function MapTreeReduce(mapping, defaultValue, reduction, array){
  const l=length(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return mapping(get(array, off));
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function mapInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(arr[i]);
  return arr;
}
let _c_17=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_17=_i(this);
  }
  static RenderedFullDocTemplate;
  static TextHoleRE;
  static GlobalHoles;
  static LocalTemplatesLoaded;
  static LoadedTemplates;
  static {
    this.LoadedTemplates=new _c_15("New_5");
    this.LocalTemplatesLoaded=false;
    this.GlobalHoles=new _c_15("New_5");
    this.TextHoleRE="\\${([^}]+)}";
    this.RenderedFullDocTemplate=null;
  }
});
let _c_18=Lazy((_i) => class HashSet extends _c_1 {
  static {
    _c_18=_i(this);
  }
  equals;
  hash;
  data;
  count;
  SAdd(item){
    return this.add(item);
  }
  Contains(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrContains(item, arr);
  }
  add(item){
    const h=this.hash(item);
    const arr=this.data[h];
    return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item, arr)?false:(arr.push(item),this.count=this.count+1,true);
  }
  arrContains(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item]))c=false;
      else i=i+1;
    return!c;
  }
  GetEnumerator(){
    return Get(concat_3(this.data));
  }
  ExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.Remove(e.Current);
    }
    finally {
      if(typeof e=="object"&&isIDisposable(e))e.Dispose();
    }
  }
  get Count(){
    return this.count;
  }
  IntersectWith(xs){
    const other=new _c_18("New_4", xs, this.equals, this.hash);
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(!other.Contains(item))this.Remove(item);
    }
  }
  Remove(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrRemove(item, arr)&&(this.count=this.count-1,true);
  }
  CopyTo(arr, index){
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++)set(arr, i+index, all[i]);
  }
  arrRemove(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item])){
        arr.splice(i, 1);
        c=false;
      }
      else i=i+1;
    return!c;
  }
  static New_3(){
    return new this("New_3");
  }
  static New_4(init_2, equals, hash){
    return new this("New_4", init_2, equals, hash);
  }
  static New_2(init_2){
    return new this("New_2", init_2);
  }
  constructor(i, _1, _2, _3){
    if(i=="New_3"){
      i="New_4";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let init_2;
    if(i=="New_2"){
      init_2=_1;
      i="New_4";
      _1=init_2;
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_4"){
      const init_3=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.data=[];
      this.count=0;
      const e=Get(init_3);
      try {
        while(e.MoveNext())
          this.add(e.Current);
      }
      finally {
        if(typeof e=="object"&&isIDisposable(e))e.Dispose();
      }
    }
  }
});
function Some(Value_1){
  return{$:1, $0:Value_1};
}
let _c_19=Lazy((_i) => class Exception extends _c_1 {
  static {
    _c_19=_i(this);
  }
});
let _c_20=Lazy((_i) => class $StartupCode_Forms {
  static {
    _c_20=_i(this);
  }
  static Int;
  static lastId;
  static {
    this.lastId=[0];
    const x=[0];
    this.Int=() => {
      x[0]++;
      return x[0];
    };
  }
});
function Forever(Item){
  return{$:0, $0:Item};
}
function Ready(Item1, Item2){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2
  };
}
function Waiting(Item1, Item2){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2
  };
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
function set_counter(_1){
  _c_28.counter=_1;
}
function counter(){
  return _c_28.counter;
}
let _c_21=Lazy((_i) => class DocElemNode {
  static {
    _c_21=_i(this);
  }
  Attr;
  Children;
  Delimiters;
  El;
  ElKey;
  Render;
  Equals(o){
    return this.ElKey===o.ElKey;
  }
  GetHashCode(){
    return this.ElKey;
  }
  static New(Attr, Children_1, Delimiters, El, ElKey, Render_1){
    const _1={
      Attr:Attr, 
      Children:Children_1, 
      El:El, 
      ElKey:ElKey
    };
    let _2=(SetOptional(_1, "Delimiters", Delimiters),SetOptional(_1, "Render", Render_1),_1);
    return Create_1(_c_21, _2);
  }
});
function StringApply(){
  return _c_25.StringApply;
}
function ApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map_1((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function StringSet(){
  return _c_25.StringSet;
}
function StringGet(){
  return _c_25.StringGet;
}
function StringListSet(){
  return _c_25.StringListSet;
}
function StringListGet(){
  return _c_25.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_25.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_25.DateTimeGetUnchecked;
}
function FileApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    });
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map_1((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function FileSetUnchecked(){
  return _c_25.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_25.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_25.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_25.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_25.IntSetChecked;
}
function IntGetChecked(){
  return _c_25.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_25.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_25.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_25.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_25.FloatGetChecked;
}
let _c_22=Lazy((_i) => {
  Force(_c_3);
  return class Elt extends _c_3 {
    static {
      _c_22=_i(this);
    }
    docNode_1;
    updates_1;
    elt;
    rvUpdates;
    static New(el, attr, children){
      const node=CreateElemNode(el, attr, children.docNode);
      const rvUpdates=_c_26.Create(children.updates);
      return new Elt(ElemDoc(node), Map2Unit(Updates(node.Attr), rvUpdates.v), el, rvUpdates);
    }
    constructor(docNode, updates, elt, rvUpdates){
      super(docNode, updates);
      this.docNode_1=docNode;
      this.updates_1=updates;
      this.elt=elt;
      this.rvUpdates=rvUpdates;
    }
  };
});
let _c_23=Lazy((_i) => class TemplateHole extends _c_1 {
  static {
    _c_23=_i(this);
  }
});
function notPresent(){
  throw new _c_33("New");
}
function convertTextNode(n){
  let m=null;
  let li=0;
  const s=n.textContent;
  const strRE=new RegExp(TextHoleRE(), "g");
  while(m=strRE.exec(s),m!==null)
    {
      n.parentNode.insertBefore(globalThis.document.createTextNode(string(s, Some(li), Some(strRE.lastIndex-get(m, 0).length-1))), n);
      li=strRE.lastIndex;
      const hole=globalThis.document.createElement("span");
      hole.setAttribute("ws-replace", get(m, 1).toLowerCase());
      n.parentNode.insertBefore(hole, n);
    }
  strRE.lastIndex=0;
  n.textContent=string(s, Some(li), null);
}
function failNotLoaded(name){
  console.warn("Instantiating non-loaded template", name);
}
function fillTextHole(instance, fillWith, templateName){
  const m=instance.querySelector("[ws-replace]");
  return Equals(m, null)?(console.warn("Filling non-existent text hole", templateName),null):(m.parentNode.replaceChild(globalThis.document.createTextNode(fillWith), m),Some(m.getAttribute("ws-replace")));
}
function removeHolesExcept(instance, dontRemove){
  const run=(attrName) => {
    foreachNotPreserved(instance, "["+attrName+"]", (e) => {
      if(!dontRemove.Contains(e.getAttribute(attrName)))e.removeAttribute(attrName);
    });
  };
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(instance, "[ws-hole]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-hole"))){
      e.removeAttribute("ws-hole");
      while(e.hasChildNodes())
        e.removeChild(e.lastChild);
    }
  });
  foreachNotPreserved(instance, "[ws-replace]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-replace")))e.parentNode.removeChild(e);
  });
  foreachNotPreserved(instance, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_1(" ", filter((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
      const attrName=get(holeAttrs, i);
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=e.getAttribute(attrName).replace(this_1, (_3, _4) => dontRemove.Contains(_4)?_3:"");
      e.setAttribute(attrName, _1);
    }
  });
}
function fillInstanceAttrs(instance, fillWith){
  convertAttrs(fillWith);
  const name=fillWith.nodeName.toLowerCase();
  const m=instance.querySelector("[ws-attr="+name+"]");
  if(Equals(m, null))console.warn("Filling non-existent attr hole", name);
  else {
    m.removeAttribute("ws-attr");
    for(let i=0, _1=fillWith.attributes.length-1;i<=_1;i++){
      const a=fillWith.attributes.item(i);
      if(a.name=="class"&&m.hasAttribute("class"))m.setAttribute("class", m.getAttribute("class")+" "+a.nodeValue);
      else m.setAttribute(a.name, a.nodeValue);
    }
  }
}
function mapHoles(t, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t, "["+attrName+"]", (e) => {
      let o;
      const m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0])e.setAttribute(attrName, m[1]);
    });
  };
  run("ws-hole");
  run("ws-replace");
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(t, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat_1(" ", map_1((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _1=holeAttrs.length-1;i<=_1;i++)((() => {
      const attrName=get(holeAttrs, i);
      return e.setAttribute(attrName, fold((_2, _3) => {
        const a=KeyValue(_3);
        return _2.replace(new RegExp("\\${"+a[0]+"}", "ig"), "${"+a[1]+"}");
      }, e.getAttribute(attrName), mappings));
    })());
  });
}
function fill(fillWith, p, n){
  while(true)
    {
      if(fillWith.hasChildNodes())n=p.insertBefore(fillWith.lastChild, n);
      else return null;
    }
}
function convertAttrs(el){
  const attrs=el.attributes;
  const toRemove=[];
  const events=[];
  const holedAttrs=[];
  for(let i=0, _2=attrs.length-1;i<=_2;i++){
    const a=attrs.item(i);
    if(StartsWith(a.nodeName, "ws-on")&&a.nodeName!="ws-onafterrender"&&a.nodeName!="ws-on"){
      toRemove.push(a.nodeName);
      events.push(string(a.nodeName, Some("ws-on".length), null)+":"+a.nodeValue.toLowerCase());
    }
    else if(!StartsWith(a.nodeName, "ws-")&&(new RegExp(TextHoleRE())).test(a.nodeValue)){
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=a.nodeValue.replace(this_1, (_3, _4) =>"${"+_4.toLowerCase()+"}");
      a.nodeValue=_1;
      holedAttrs.push(a.nodeName);
    }
    else void 0;
  }
  if(!(events.length==0))el.setAttribute("ws-on", concat_1(" ", events));
  if(!(holedAttrs.length==0))el.setAttribute("ws-attr-holes", concat_1(" ", holedAttrs));
  const lowercaseAttr=(name) => {
    const m=el.getAttribute(name);
    if(m==null){ }
    else el.setAttribute(name, m.toLowerCase());
  };
  lowercaseAttr("ws-hole");
  lowercaseAttr("ws-replace");
  lowercaseAttr("ws-attr");
  lowercaseAttr("ws-onafterrender");
  lowercaseAttr("ws-var");
  iter_1((a_1) => {
    el.removeAttribute(a_1);
  }, toRemove);
}
function string(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?"":source.slice(0, f+1);
    }
    else return"";
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    return f_1<0?"":source.slice(start.$0, f_1+1);
  }
}
function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
function arrContains(item, arr){
  let c=true;
  let i=0;
  while(c&&i<length(arr))
    if(Equals(arr[i], item))c=false;
    else i=i+1;
  return!c;
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
let _c_24=Lazy((_i) => class KeyCollection extends _c_1 {
  static {
    _c_24=_i(this);
  }
  d;
  GetEnumerator(){
    return Get(map((kvp) => kvp.K, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
});
function get_UseAnimations(){
  return UseAnimations();
}
function Play(anim){
  const _1=null;
  return Delay(() => Bind_1(Run_1(() => { }, Actions(anim)), () => {
    Finalize(anim);
    return Return_1(null);
  }));
}
function Append_1(a, a_1){
  return Anim(Append_2(a.$0, a_1.$0));
}
function Run_1(k, anim){
  const dur=anim.Duration;
  if(dur===0)return Zero();
  else {
    const a=(ok) => {
      function loop(start){
        return(now) => {
          const t=now-start;
          anim.Compute(t);
          k();
          return t<=dur?void requestAnimationFrame((t_1) => {
            (loop(start))(t_1);
          }):ok();
        };
      }
      requestAnimationFrame((t) => {
        (loop(t))(t);
      });
    };
    return FromContinuations((_1, _2, _3) => a.apply(null, [_1, _2, _3]));
  }
}
function Anim(Item){
  return{$:0, $0:Item};
}
function Concat(xs){
  return Anim(Concat_1(map(List, xs)));
}
function get_Empty(){
  return Anim(Empty());
}
function BatchUpdatesEnabled(){
  return _c_27.BatchUpdatesEnabled;
}
function StartProcessor(procAsync){
  const st=[0];
  function work(){
    const _1=null;
    return Delay(() => Bind_1(procAsync, () => {
      const m=st[0];
      return Equals(m, 1)?(st[0]=0,Zero()):Equals(m, 2)?(st[0]=1,work()):Zero();
    }));
  }
  return() => {
    const m=st[0];
    if(Equals(m, 0)){
      st[0]=1;
      Start(work(), null);
    }
    else Equals(m, 1)?st[0]=2:void 0;
  };
}
function Int_1(){
  return _c_20.Int;
}
function List_1_Swap(this_1, i, j){
  set(this_1, i, get(this_1, j));
  set(this_1, j, get(this_1, i));
}
function New_3(DynElem, DynFlags, DynNodes, OnAfterRender){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender);
  return _1;
}
let _c_25=Lazy((_i) => class Client {
  static {
    _c_25=_i(this);
  }
  static FloatApplyChecked;
  static FloatGetChecked;
  static FloatSetChecked;
  static FloatApplyUnchecked;
  static FloatGetUnchecked;
  static FloatSetUnchecked;
  static IntApplyChecked;
  static IntGetChecked;
  static IntSetChecked;
  static IntApplyUnchecked;
  static IntGetUnchecked;
  static IntSetUnchecked;
  static FileApplyUnchecked;
  static FileGetUnchecked;
  static FileSetUnchecked;
  static DateTimeApplyUnchecked;
  static DateTimeGetUnchecked;
  static DateTimeSetUnchecked;
  static StringListApply;
  static StringListGet;
  static StringListSet;
  static StringApply;
  static StringGet;
  static StringSet;
  static BoolCheckedApply;
  static EmptyAttr;
  static {
    this.EmptyAttr=null;
    this.BoolCheckedApply=(var_1) =>[(el) => {
      el.addEventListener("change", () => var_1.Get()!=el.checked?var_1.Set(el.checked):null);
    }, (_1) =>(_2) => _2!=null&&_2.$==1?void(_1.checked=_2.$0):null, Map_1(Some, var_1.View)];
    this.StringSet=(el) =>(s_8) => {
      el.value=s_8;
    };
    this.StringGet=(el) => Some(el.value);
    const g=StringGet();
    const s=StringSet();
    this.StringApply=(v) => ApplyValue(g, s, v);
    this.StringListSet=(el) =>(s_8) => {
      const options_=el.options;
      for(let i=0, _1=options_.length-1;i<=_1;i++)((() => {
        const option=options_.item(i);
        option.selected=arrContains(option.value, s_8);
      })());
    };
    this.StringListGet=(el) => {
      const selectedOptions=el.selectedOptions;
      return Some(ofSeq(delay(() => collect((i) =>[selectedOptions.item(i).value], range(0, selectedOptions.length-1)))));
    };
    const g_1=StringListGet();
    const s_1=StringListSet();
    this.StringListApply=(v) => ApplyValue(g_1, s_1, v);
    this.DateTimeSetUnchecked=(el) =>(i) => {
      el.value=(new Date(i)).toLocaleString();
    };
    this.DateTimeGetUnchecked=(el) => {
      let o;
      let m;
      const s_8=el.value;
      if(isBlank(s_8))return Some(-8640000000000000);
      else {
        o=0;
        const m_1=TryParse_1(s_8);
        let _1=m_1!=null&&m_1.$==1&&(o=m_1.$0,true);
        m=[_1, o];
        return m[0]?Some(m[1]):null;
      }
    };
    const g_2=DateTimeGetUnchecked();
    const s_2=DateTimeSetUnchecked();
    this.DateTimeApplyUnchecked=(v) => ApplyValue(g_2, s_2, v);
    this.FileSetUnchecked=() =>() => null;
    this.FileGetUnchecked=(el) => {
      const files=el.files;
      return Some(ofSeq(delay(() => map((i) => files.item(i), range(0, files.length-1)))));
    };
    const g_3=FileGetUnchecked();
    const s_3=FileSetUnchecked();
    this.FileApplyUnchecked=(v) => FileApplyValue(g_3, s_3, v);
    this.IntSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.IntGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return pd!==pd>>0?null:Some(pd);
      }
    };
    const g_4=IntGetUnchecked();
    const s_4=IntSetUnchecked();
    this.IntApplyUnchecked=(v) => ApplyValue(g_4, s_4, v);
    this.IntSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.IntGetChecked=(el) => {
      let _1;
      let o;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?_c_29.Blank(s_8):_c_29.Invalid(s_8);
      else {
        const m=(o=0,[TryParse(s_8, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        _1=m[0]?_c_29.Valid(m[1], s_8):_c_29.Invalid(s_8);
      }
      return Some(_1);
    };
    const g_5=IntGetChecked();
    const s_5=IntSetChecked();
    this.IntApplyChecked=(v) => ApplyValue(g_5, s_5, v);
    this.FloatSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.FloatGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return isNaN(pd)?null:Some(pd);
      }
    };
    const g_6=FloatGetUnchecked();
    const s_6=FloatSetUnchecked();
    this.FloatApplyUnchecked=(v) => ApplyValue(g_6, s_6, v);
    this.FloatSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.FloatGetChecked=(el) => {
      let _1;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?_c_29.Blank(s_8):_c_29.Invalid(s_8);
      else {
        const i=+s_8;
        _1=isNaN(i)?_c_29.Invalid(s_8):_c_29.Valid(i, s_8);
      }
      return Some(_1);
    };
    const g_7=FloatGetChecked();
    const s_7=FloatSetChecked();
    this.FloatApplyChecked=(v) => ApplyValue(g_7, s_7, v);
  }
});
let _c_26=Lazy((_i) => class Updates_1 {
  static {
    _c_26=_i(this);
  }
  c;
  s;
  v;
  static Create(v){
    let var_1;
    var_1=null;
    var_1=_c_26.New(v, null, () => {
      let c;
      c=var_1.s;
      return c===null?(c=Copy(var_1.c()),var_1.s=c,WhenObsoleteRun(c, () => {
        var_1.s=null;
      }),c):c;
    });
    return var_1;
  }
  static New(Current, Snap, VarView){
    return Create_1(_c_26, {
      c:Current, 
      s:Snap, 
      v:VarView
    });
  }
});
function New_4(PreviousNodes, Top){
  return{PreviousNodes:PreviousNodes, Top:Top};
}
function get_Empty_1(){
  return NodeSet(new _c_18("New_3"));
}
function FindAll(doc){
  const q=[];
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!=null&&_1.$==0){
            const b=_1.$1;
            const a=_1.$0;
            recF(0, a);
            _1=b;
          }
          else if(_1!=null&&_1.$==1){
            const el=_1.$0;
            _1=el;
            recI=1;
          }
          else if(_1!=null&&_1.$==2){
            const em=_1.$0;
            _1=em.Current;
          }
          else if(_1!=null&&_1.$==6){
            const x=_1.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter_1(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_1);
          _1=_1.Children;
          recI=0;
          break;
      }
  }
  function loop(node){
    return recF(0, node);
  }
  function loopEN(el){
    return recF(1, el);
  }
  loop(doc);
  return NodeSet(new _c_18("New_2", q));
}
function NodeSet(Item){
  return{$:0, $0:Item};
}
function Filter(f, a){
  return NodeSet(Filter_1(f, a.$0));
}
function Except(a, a_1){
  return NodeSet(Except_1(a.$0, a_1.$0));
}
function ToArray(a){
  return ToArray_2(a.$0);
}
function Intersect(a, a_1){
  return NodeSet(Intersect_1(a.$0, a_1.$0));
}
function Delay(mk){
  return(c) => {
    try {
      (mk())(c);
    }
    catch(e){
      c.k(No(e));
    }
  };
}
function Bind_1(r, f){
  return checkCancel((c) => {
    r(New_5((a) => {
      if(a.$==0){
        const x=a.$0;
        scheduler().Fork(() => {
          try {
            (f(x))(c);
          }
          catch(e){
            c.k(No(e));
          }
        });
      }
      else scheduler().Fork(() => {
        c.k(a);
      });
    }, c.ct));
  });
}
function Zero(){
  return _c_36.Zero;
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_5((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function Return_1(x){
  return(c) => {
    c.k(Ok(x));
  };
}
function scheduler(){
  return _c_36.scheduler;
}
function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
function defCTS(){
  return _c_36.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function FromContinuations(subscribe){
  return(c) => {
    const continued=[false];
    const once=(cont) => {
      if(continued[0])FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
      else {
        continued[0]=true;
        scheduler().Fork(cont);
      }
    };
    subscribe((a) => {
      once(() => {
        c.k(Ok(a));
      });
    }, (e) => {
      once(() => {
        c.k(No(e));
      });
    }, (e) => {
      once(() => {
        c.k(Cc(e));
      });
    });
  };
}
function cancel(c){
  c.k(Cc(new _c_38("New", c.ct)));
}
function UseAnimations(){
  return _c_32.UseAnimations;
}
function Actions(a){
  return ConcatActions(choose((a_1) => a_1.$==1?Some(a_1.$0):null, ToArray_1(a.$0)));
}
function Finalize(a){
  iter_1((a_1) => {
    if(a_1.$==0)a_1.$0();
  }, ToArray_1(a.$0));
}
function ConcatActions(xs){
  const xs_1=ofSeqNonCopying(xs);
  const m=length(xs_1);
  if(m===0)return Const_1();
  else if(m===1)return get(xs_1, 0);
  else {
    const dur=max(map((anim) => anim.Duration, xs_1));
    const xs_2=map_1((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter_1((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
function List(a){
  return a.$0;
}
function Const_1(v){
  return Def(0, () => v);
}
function Def(d, f){
  return{Compute:f, Duration:d};
}
function Prolong(nextDuration, anim){
  const comp=anim.Compute;
  const dur=anim.Duration;
  const last=Create(() => anim.Compute(anim.Duration));
  return{Compute:(t) => t>=dur?last.f():comp(t), Duration:nextDuration};
}
let _c_27=Lazy((_i) => class Proxy {
  static {
    _c_27=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
let _c_28=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_28=_i(this);
  }
  static counter;
  static {
    this.counter=0;
  }
});
function Clear(a){
  a.splice(0, length(a));
}
function isBlank(s){
  return forall_1(IsWhiteSpace, s);
}
let _c_29=Lazy((_i) => class CheckedInput {
  static {
    _c_29=_i(this);
  }
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  static Blank(inputText){
    return Create_1(CheckedInput, {$:2, $0:inputText});
  }
  static Invalid(inputText){
    return Create_1(CheckedInput, {$:1, $0:inputText});
  }
  static Valid(value, inputText){
    return Create_1(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
});
let _c_30=Lazy((_i) => class DynamicAttrNode extends _c_1 {
  static {
    _c_30=_i(this);
  }
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map_1((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
});
let _c_31=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_31=_i(this);
  }
  static defaultWrap;
  static wrapMap;
  static rhtml;
  static rtagName;
  static rxhtmlTag;
  static {
    this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
    this.rtagName=new RegExp("<([\\w:]+)");
    this.rhtml=new RegExp("<|&#?\\w+;");
    const table=[1, "<table>", "</table>"];
    let _1=Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", table], ["tbody", table], ["tfoot", table], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
    this.wrapMap=_1;
    this.defaultWrap=[0, "", ""];
  }
});
let _c_32=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_32=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=_c_35.Custom((t) => {
      const t2=t*t;
      return 3*t2-2*(t2*t);
    });
    this.UseAnimations=true;
  }
});
function Append_2(x, y){
  return x.$==0?y:y.$==0?x:{
    $:2, 
    $0:x, 
    $1:y
  };
}
function ToArray_1(xs){
  const out=[];
  function loop(xs_1){
    while(true)
      {
        if(xs_1.$==1)return out.push(xs_1.$0);
        else if(xs_1.$==2){
          const y=xs_1.$1;
          const x=xs_1.$0;
          loop(x);
          xs_1=y;
        }
        else return xs_1.$==3?iter_1((v) => {
          out.push(v);
        }, xs_1.$0):null;
      }
  }
  loop(xs);
  return out.slice(0);
}
function Concat_1(xs){
  const x=ofSeqNonCopying(xs);
  return TreeReduce(Empty(), Append_2, x);
}
function Empty(){
  return _c_39.Empty;
}
function concat_3(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
}
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_1(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
function TryParse_2(s, min, max_1, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max_1;
  if(ok)r.set(x);
  return ok;
}
let _c_33=Lazy((_i) => {
  Force(Error);
  return class KeyNotFoundException extends Error {
    static {
      _c_33=_i(this);
    }
    static New(){
      return new this("New");
    }
    static New_1(message){
      return new this("New_1", message);
    }
    constructor(i, _1){
      if(i=="New"){
        i="New_1";
        _1="The given key was not present in the dictionary.";
      }
      if(i=="New_1"){
        const message=_1;
        super(message);
      }
    }
  };
});
let _c_34=Lazy((_i) => class Scheduler extends _c_1 {
  static {
    _c_34=_i(this);
  }
  idle;
  robin;
  Fork(action){
    this.robin.push(action);
    this.idle?(this.idle=false,setTimeout(() => {
      this.tick();
    }, 0)):void 0;
  }
  tick(){
    const t=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t>40?(setTimeout(() => {
          this.tick();
        }, 0),loop=false):void 0;
      }
  }
  constructor(){
    super();
    this.idle=true;
    this.robin=[];
  }
});
let _c_35=Lazy((_i) => class Easing extends _c_1 {
  static {
    _c_35=_i(this);
  }
  transformTime;
  static Custom(f){
    return new Easing(f);
  }
  constructor(transformTime){
    super();
    this.transformTime=transformTime;
  }
});
function New_5(k, ct){
  return{k:k, ct:ct};
}
function No(Item){
  return{$:1, $0:Item};
}
function Ok(Item){
  return{$:0, $0:Item};
}
function Cc(Item){
  return{$:2, $0:Item};
}
let _c_36=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_36=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_6(false, []);
    this.scheduler=new _c_34();
    this.defCTS=[new _c_37()];
    this.Zero=Return_1();
    this.GetCT=(c) => {
      c.k(Ok(c.ct));
    };
  }
});
function New_6(IsCancellationRequested, Registrations){
  return{c:IsCancellationRequested, r:Registrations};
}
function Filter_1(ok, set_1){
  return new _c_18("New_2", filter(ok, ToArray_2(set_1)));
}
function Except_1(excluded, included){
  const set_1=new _c_18("New_2", ToArray_2(included));
  set_1.ExceptWith(ToArray_2(excluded));
  return set_1;
}
function ToArray_2(set_1){
  const arr=create(set_1.Count, void 0);
  set_1.CopyTo(arr, 0);
  return arr;
}
function Intersect_1(a, b){
  const set_1=new _c_18("New_2", ToArray_2(a));
  set_1.IntersectWith(ToArray_2(b));
  return set_1;
}
let _c_37=Lazy((_i) => class CancellationTokenSource extends _c_1 {
  static {
    _c_37=_i(this);
  }
  init;
  c;
  pending;
  r;
  constructor(){
    super();
    this.c=false;
    this.pending=null;
    this.r=[];
    this.init=1;
  }
});
function Children(elem, delims){
  let n;
  if(delims!=null&&delims.$==1){
    const a=[];
    n=delims.$0[0].nextSibling;
    while(n!==delims.$0[1])
      {
        a.push(n);
        n=n.nextSibling;
      }
    return DomNodes(a);
  }
  else {
    let _1=elem.childNodes.length;
    const o=elem.childNodes;
    let _2=init_1(_1, (a_1) => o[a_1]);
    return DomNodes(_2);
  }
}
function Except_2(a, a_1){
  const excluded=a.$0;
  return DomNodes(filter((n) => forall_2((k) =>!(n===k), excluded), a_1.$0));
}
function Iter(f, a){
  iter_1(f, a.$0);
}
function DocChildren(node){
  const q=[];
  function loop(doc){
    while(true)
      {
        if(doc!=null&&doc.$==2){
          const d=doc.$0;
          doc=d.Current;
        }
        else if(doc!=null&&doc.$==1)return q.push(doc.$0.El);
        else if(doc==null)return null;
        else if(doc!=null&&doc.$==5)return q.push(doc.$0);
        else if(doc!=null&&doc.$==4)return q.push(doc.$0.Text);
        else if(doc!=null&&doc.$==6){
          const x=doc.$0.Els;
          return(((a_1) =>(a_2) => {
            iter_1(a_1, a_2);
          })((a_1) => {
            if(a_1==null||a_1.constructor===Object)loop(a_1);
            else q.push(a_1);
          }))(x);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          loop(a);
          doc=b;
        }
      }
  }
  loop(node.Children);
  return DomNodes(ofSeqNonCopying(q));
}
function DomNodes(Item){
  return{$:0, $0:Item};
}
let _c_38=Lazy((_i) => {
  Force(Error);
  return class OperationCanceledException extends Error {
    static {
      _c_38=_i(this);
    }
    ct;
    static New(ct){
      return new this("New", ct);
    }
    static New_1(message, inner, ct){
      return new this("New_1", message, inner, ct);
    }
    constructor(i, _1, _2, _3){
      let ct;
      if(i=="New"){
        ct=_1;
        i="New_1";
        _1="The operation was canceled.";
        _2=null;
        _3=ct;
      }
      if(i=="New_1"){
        const message=_1;
        const inner=_2;
        const ct_1=_3;
        super(message);
        this.inner=inner;
        this.ct=ct_1;
      }
    }
  };
});
function Create(f){
  return New_7(false, f, forceLazy);
}
function forceLazy(){
  const v=this.v();
  this.c=true;
  this.v=v;
  this.f=cachedLazy;
  return v;
}
function cachedLazy(){
  return this.v;
}
let _c_39=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_39=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
function New_7(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
OnLoad(() => {
  FinalForm();
});
Start_1();

