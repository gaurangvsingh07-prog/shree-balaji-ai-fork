import { s as lebEncode, t as concat, v as slebEncode, w as lebDecode, x as safeRead, y as safeReadUint8, z as PipeArrayBuffer, A as Principal$1, C as iexp2, E as writeUIntLE, G as readUIntLE, H as writeIntLE, I as readIntLE, J as slebDecode, K as uint8ToDataView } from "./index-D0AWEIiM.js";
function idlHash(s) {
  const utf8encoder = new TextEncoder();
  const array = utf8encoder.encode(s);
  let h = 0;
  for (const c of array) {
    h = (h * 223 + c) % 2 ** 32;
  }
  return h;
}
function idlLabelToId(label) {
  if (/^_\d+_$/.test(label) || /^_0x[0-9a-fA-F]+_$/.test(label)) {
    const num = +label.slice(1, -1);
    if (Number.isSafeInteger(num) && num >= 0 && num < 2 ** 32) {
      return num;
    }
  }
  return idlHash(label);
}
var IDLTypeIds;
(function(IDLTypeIds2) {
  IDLTypeIds2[IDLTypeIds2["Null"] = -1] = "Null";
  IDLTypeIds2[IDLTypeIds2["Bool"] = -2] = "Bool";
  IDLTypeIds2[IDLTypeIds2["Nat"] = -3] = "Nat";
  IDLTypeIds2[IDLTypeIds2["Int"] = -4] = "Int";
  IDLTypeIds2[IDLTypeIds2["Float32"] = -13] = "Float32";
  IDLTypeIds2[IDLTypeIds2["Float64"] = -14] = "Float64";
  IDLTypeIds2[IDLTypeIds2["Text"] = -15] = "Text";
  IDLTypeIds2[IDLTypeIds2["Reserved"] = -16] = "Reserved";
  IDLTypeIds2[IDLTypeIds2["Empty"] = -17] = "Empty";
  IDLTypeIds2[IDLTypeIds2["Opt"] = -18] = "Opt";
  IDLTypeIds2[IDLTypeIds2["Vector"] = -19] = "Vector";
  IDLTypeIds2[IDLTypeIds2["Record"] = -20] = "Record";
  IDLTypeIds2[IDLTypeIds2["Variant"] = -21] = "Variant";
  IDLTypeIds2[IDLTypeIds2["Func"] = -22] = "Func";
  IDLTypeIds2[IDLTypeIds2["Service"] = -23] = "Service";
  IDLTypeIds2[IDLTypeIds2["Principal"] = -24] = "Principal";
})(IDLTypeIds || (IDLTypeIds = {}));
const toReadableString_max = 400;
function zipWith(xs, ys, f) {
  return xs.map((x, i) => f(x, ys[i]));
}
var IdlTypeName;
(function(IdlTypeName2) {
  IdlTypeName2["EmptyClass"] = "__IDL_EmptyClass__";
  IdlTypeName2["UnknownClass"] = "__IDL_UnknownClass__";
  IdlTypeName2["BoolClass"] = "__IDL_BoolClass__";
  IdlTypeName2["NullClass"] = "__IDL_NullClass__";
  IdlTypeName2["ReservedClass"] = "__IDL_ReservedClass__";
  IdlTypeName2["TextClass"] = "__IDL_TextClass__";
  IdlTypeName2["IntClass"] = "__IDL_IntClass__";
  IdlTypeName2["NatClass"] = "__IDL_NatClass__";
  IdlTypeName2["FloatClass"] = "__IDL_FloatClass__";
  IdlTypeName2["FixedIntClass"] = "__IDL_FixedIntClass__";
  IdlTypeName2["FixedNatClass"] = "__IDL_FixedNatClass__";
  IdlTypeName2["VecClass"] = "__IDL_VecClass__";
  IdlTypeName2["OptClass"] = "__IDL_OptClass__";
  IdlTypeName2["RecordClass"] = "__IDL_RecordClass__";
  IdlTypeName2["TupleClass"] = "__IDL_TupleClass__";
  IdlTypeName2["VariantClass"] = "__IDL_VariantClass__";
  IdlTypeName2["RecClass"] = "__IDL_RecClass__";
  IdlTypeName2["PrincipalClass"] = "__IDL_PrincipalClass__";
  IdlTypeName2["FuncClass"] = "__IDL_FuncClass__";
  IdlTypeName2["ServiceClass"] = "__IDL_ServiceClass__";
})(IdlTypeName || (IdlTypeName = {}));
class Type {
  /* Display type name */
  display() {
    return this.name;
  }
  valueToString(x) {
    return toReadableString(x);
  }
  /* Implement `T` in the IDL spec, only needed for non-primitive types */
  buildTypeTable(typeTable) {
    if (!typeTable.has(this)) {
      this._buildTypeTableImpl(typeTable);
    }
  }
}
class PrimitiveType extends Type {
  checkType(t) {
    if (this.name !== t.name) {
      throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
    }
    return t;
  }
  _buildTypeTableImpl(_typeTable) {
    return;
  }
}
class ConstructType extends Type {
  checkType(t) {
    if (t instanceof RecClass) {
      const ty = t.getType();
      if (typeof ty === "undefined") {
        throw new Error("type mismatch with uninitialized type");
      }
      return ty;
    }
    throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`);
  }
  encodeType(typeTable) {
    return typeTable.indexOf(this.name);
  }
}
class EmptyClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.EmptyClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.EmptyClass;
  }
  accept(v, d) {
    return v.visitEmpty(this, d);
  }
  covariant(x) {
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Empty);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}
class BoolClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.BoolClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.BoolClass;
  }
  accept(v, d) {
    return v.visitBool(this, d);
  }
  covariant(x) {
    if (typeof x === "boolean")
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    return new Uint8Array([x ? 1 : 0]);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Bool);
  }
  decodeValue(b, t) {
    this.checkType(t);
    switch (safeReadUint8(b)) {
      case 0:
        return false;
      case 1:
        return true;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
}
class NullClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.NullClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.NullClass;
  }
  accept(v, d) {
    return v.visitNull(this, d);
  }
  covariant(x) {
    if (x === null)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Null);
  }
  decodeValue(_b, t) {
    this.checkType(t);
    return null;
  }
  get name() {
    return "null";
  }
}
class ReservedClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.ReservedClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.ReservedClass;
  }
  accept(v, d) {
    return v.visitReserved(this, d);
  }
  covariant(_x) {
    return true;
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Reserved);
  }
  decodeValue(b, t) {
    if (t.name !== this.name) {
      t.decodeValue(b, t);
    }
    return null;
  }
  get name() {
    return "reserved";
  }
}
class TextClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.TextClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.TextClass;
  }
  accept(v, d) {
    return v.visitText(this, d);
  }
  covariant(x) {
    if (typeof x === "string")
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const buf = new TextEncoder().encode(x);
    const len = lebEncode(buf.byteLength);
    return concat(len, buf);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Text);
  }
  decodeValue(b, t) {
    this.checkType(t);
    const len = lebDecode(b);
    const buf = safeRead(b, Number(len));
    const decoder = new TextDecoder("utf8", { fatal: true });
    return decoder.decode(buf);
  }
  get name() {
    return "text";
  }
  valueToString(x) {
    return '"' + x + '"';
  }
}
class IntClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.IntClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.IntClass;
  }
  accept(v, d) {
    return v.visitInt(this, d);
  }
  covariant(x) {
    if (typeof x === "bigint" || Number.isInteger(x))
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    return slebEncode(x);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Int);
  }
  decodeValue(b, t) {
    this.checkType(t);
    return slebDecode(b);
  }
  get name() {
    return "int";
  }
  valueToString(x) {
    return x.toString();
  }
}
class NatClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.NatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.NatClass;
  }
  accept(v, d) {
    return v.visitNat(this, d);
  }
  covariant(x) {
    if (typeof x === "bigint" && x >= BigInt(0) || Number.isInteger(x) && x >= 0)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    return lebEncode(x);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Nat);
  }
  decodeValue(b, t) {
    this.checkType(t);
    return lebDecode(b);
  }
  get name() {
    return "nat";
  }
  valueToString(x) {
    return x.toString();
  }
}
class FloatClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FloatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FloatClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
    if (_bits !== 32 && _bits !== 64) {
      throw new Error("not a valid float type");
    }
  }
  accept(v, d) {
    return v.visitFloat(this, d);
  }
  covariant(x) {
    if (typeof x === "number" || x instanceof Number)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const buf = new ArrayBuffer(this._bits / 8);
    const view = new DataView(buf);
    if (this._bits === 32) {
      view.setFloat32(0, x, true);
    } else {
      view.setFloat64(0, x, true);
    }
    return new Uint8Array(buf);
  }
  encodeType() {
    const opcode = this._bits === 32 ? IDLTypeIds.Float32 : IDLTypeIds.Float64;
    return slebEncode(opcode);
  }
  decodeValue(b, t) {
    this.checkType(t);
    const bytes = safeRead(b, this._bits / 8);
    const view = uint8ToDataView(bytes);
    if (this._bits === 32) {
      return view.getFloat32(0, true);
    } else {
      return view.getFloat64(0, true);
    }
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(x) {
    return x.toString();
  }
}
class FixedIntClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FixedIntClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FixedIntClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
  }
  accept(v, d) {
    return v.visitFixedInt(this, d);
  }
  covariant(x) {
    const min = iexp2(this._bits - 1) * BigInt(-1);
    const max = iexp2(this._bits - 1) - BigInt(1);
    let ok = false;
    if (typeof x === "bigint") {
      ok = x >= min && x <= max;
    } else if (Number.isInteger(x)) {
      const v = BigInt(x);
      ok = v >= min && v <= max;
    } else {
      ok = false;
    }
    if (ok)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    return writeIntLE(x, this._bits / 8);
  }
  encodeType() {
    const offset = Math.log2(this._bits) - 3;
    return slebEncode(-9 - offset);
  }
  decodeValue(b, t) {
    this.checkType(t);
    const num = readIntLE(b, this._bits / 8);
    if (this._bits <= 32) {
      return Number(num);
    } else {
      return num;
    }
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(x) {
    return x.toString();
  }
}
class FixedNatClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.FixedNatClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FixedNatClass;
  }
  constructor(_bits) {
    super();
    this._bits = _bits;
  }
  accept(v, d) {
    return v.visitFixedNat(this, d);
  }
  covariant(x) {
    const max = iexp2(this._bits);
    let ok = false;
    if (typeof x === "bigint" && x >= BigInt(0)) {
      ok = x < max;
    } else if (Number.isInteger(x) && x >= 0) {
      const v = BigInt(x);
      ok = v < max;
    } else {
      ok = false;
    }
    if (ok)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    return writeUIntLE(x, this._bits / 8);
  }
  encodeType() {
    const offset = Math.log2(this._bits) - 3;
    return slebEncode(-5 - offset);
  }
  decodeValue(b, t) {
    this.checkType(t);
    const num = readUIntLE(b, this._bits / 8);
    if (this._bits <= 32) {
      return Number(num);
    } else {
      return num;
    }
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(x) {
    return x.toString();
  }
}
class VecClass extends ConstructType {
  get typeName() {
    return IdlTypeName.VecClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.VecClass;
  }
  constructor(_type) {
    super();
    this._type = _type;
    this._blobOptimization = false;
    if (_type instanceof FixedNatClass && _type._bits === 8) {
      this._blobOptimization = true;
    }
  }
  accept(v, d) {
    return v.visitVec(this, this._type, d);
  }
  covariant(x) {
    const bits = this._type instanceof FixedNatClass ? this._type._bits : this._type instanceof FixedIntClass ? this._type._bits : 0;
    if (ArrayBuffer.isView(x) && bits == x.BYTES_PER_ELEMENT * 8 || Array.isArray(x) && x.every((v, idx) => {
      try {
        return this._type.covariant(v);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${idx} -> ${e.message}`);
      }
    }))
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const len = lebEncode(x.length);
    if (this._blobOptimization) {
      return concat(len, new Uint8Array(x));
    }
    if (ArrayBuffer.isView(x)) {
      if (x instanceof Int16Array || x instanceof Uint16Array) {
        const buffer = new DataView(new ArrayBuffer(x.length * 2));
        for (let i = 0; i < x.length; i++) {
          if (x instanceof Int16Array) {
            buffer.setInt16(i * 2, x[i], true);
          } else {
            buffer.setUint16(i * 2, x[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      } else if (x instanceof Int32Array || x instanceof Uint32Array) {
        const buffer = new DataView(new ArrayBuffer(x.length * 4));
        for (let i = 0; i < x.length; i++) {
          if (x instanceof Int32Array) {
            buffer.setInt32(i * 4, x[i], true);
          } else {
            buffer.setUint32(i * 4, x[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      } else if (x instanceof BigInt64Array || x instanceof BigUint64Array) {
        const buffer = new DataView(new ArrayBuffer(x.length * 8));
        for (let i = 0; i < x.length; i++) {
          if (x instanceof BigInt64Array) {
            buffer.setBigInt64(i * 8, x[i], true);
          } else {
            buffer.setBigUint64(i * 8, x[i], true);
          }
        }
        return concat(len, new Uint8Array(buffer.buffer));
      } else {
        return concat(len, new Uint8Array(x.buffer, x.byteOffset, x.byteLength));
      }
    }
    const buf = new PipeArrayBuffer(new Uint8Array(len.byteLength + x.length), 0);
    buf.write(len);
    for (const d of x) {
      const encoded = this._type.encodeValue(d);
      buf.write(new Uint8Array(encoded));
    }
    return buf.buffer;
  }
  _buildTypeTableImpl(typeTable) {
    this._type.buildTypeTable(typeTable);
    const opCode = slebEncode(IDLTypeIds.Vector);
    const buffer = this._type.encodeType(typeTable);
    typeTable.add(this, concat(opCode, buffer));
  }
  decodeValue(b, t) {
    const vec = this.checkType(t);
    if (!(vec instanceof VecClass)) {
      throw new Error("Not a vector type");
    }
    const len = Number(lebDecode(b));
    if (this._type instanceof FixedNatClass) {
      if (this._type._bits == 8) {
        return new Uint8Array(b.read(len));
      }
      if (this._type._bits == 16) {
        const bytes = b.read(len * 2);
        const u16 = new Uint16Array(bytes.buffer, bytes.byteOffset, len);
        return u16;
      }
      if (this._type._bits == 32) {
        const bytes = b.read(len * 4);
        const u32 = new Uint32Array(bytes.buffer, bytes.byteOffset, len);
        return u32;
      }
      if (this._type._bits == 64) {
        return new BigUint64Array(b.read(len * 8).buffer);
      }
    }
    if (this._type instanceof FixedIntClass) {
      if (this._type._bits == 8) {
        return new Int8Array(b.read(len));
      }
      if (this._type._bits == 16) {
        const bytes = b.read(len * 2);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new Int16Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getInt16(i * 2, true);
        }
        return result;
      }
      if (this._type._bits == 32) {
        const bytes = b.read(len * 4);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new Int32Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getInt32(i * 4, true);
        }
        return result;
      }
      if (this._type._bits == 64) {
        const bytes = b.read(len * 8);
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        const result = new BigInt64Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = view.getBigInt64(i * 8, true);
        }
        return result;
      }
    }
    const rets = [];
    for (let i = 0; i < len; i++) {
      rets.push(this._type.decodeValue(b, vec._type));
    }
    return rets;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(x) {
    const elements = x.map((e) => this._type.valueToString(e));
    return "vec {" + elements.join("; ") + "}";
  }
}
class OptClass extends ConstructType {
  get typeName() {
    return IdlTypeName.OptClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.OptClass;
  }
  constructor(_type) {
    super();
    this._type = _type;
  }
  accept(v, d) {
    return v.visitOpt(this, this._type, d);
  }
  covariant(x) {
    try {
      if (Array.isArray(x) && (x.length === 0 || x.length === 1 && this._type.covariant(x[0])))
        return true;
    } catch (e) {
      throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)} 

-> ${e.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    if (x.length === 0) {
      return new Uint8Array([0]);
    } else {
      return concat(new Uint8Array([1]), this._type.encodeValue(x[0]));
    }
  }
  _buildTypeTableImpl(typeTable) {
    this._type.buildTypeTable(typeTable);
    const opCode = slebEncode(IDLTypeIds.Opt);
    const buffer = this._type.encodeType(typeTable);
    typeTable.add(this, concat(opCode, buffer));
  }
  decodeValue(b, t) {
    if (t instanceof NullClass) {
      return [];
    }
    if (t instanceof ReservedClass) {
      return [];
    }
    let wireType = t;
    if (t instanceof RecClass) {
      const ty = t.getType();
      if (typeof ty === "undefined") {
        throw new Error("type mismatch with uninitialized type");
      } else
        wireType = ty;
    }
    if (wireType instanceof OptClass) {
      switch (safeReadUint8(b)) {
        case 0:
          return [];
        case 1: {
          const checkpoint = b.save();
          try {
            const v = this._type.decodeValue(b, wireType._type);
            return [v];
          } catch (e) {
            b.restore(checkpoint);
            wireType._type.decodeValue(b, wireType._type);
            return [];
          }
        }
        default:
          throw new Error("Not an option value");
      }
    } else if (
      // this check corresponds to `not (null <: <t>)` in the spec
      this._type instanceof NullClass || this._type instanceof OptClass || this._type instanceof ReservedClass
    ) {
      wireType.decodeValue(b, wireType);
      return [];
    } else {
      const checkpoint = b.save();
      try {
        const v = this._type.decodeValue(b, t);
        return [v];
      } catch (e) {
        b.restore(checkpoint);
        wireType.decodeValue(b, t);
        return [];
      }
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(x) {
    if (x.length === 0) {
      return "null";
    } else {
      return `opt ${this._type.valueToString(x[0])}`;
    }
  }
}
class RecordClass extends ConstructType {
  get typeName() {
    return IdlTypeName.RecordClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.RecordClass || instance.typeName === IdlTypeName.TupleClass;
  }
  constructor(fields = {}) {
    super();
    this._fields = Object.entries(fields).sort((a, b) => idlLabelToId(a[0]) - idlLabelToId(b[0]));
  }
  accept(v, d) {
    return v.visitRecord(this, this._fields, d);
  }
  tryAsTuple() {
    const res = [];
    for (let i = 0; i < this._fields.length; i++) {
      const [key, type] = this._fields[i];
      if (key !== `_${i}_`) {
        return null;
      }
      res.push(type);
    }
    return res;
  }
  covariant(x) {
    if (typeof x === "object" && this._fields.every(([k, t]) => {
      if (!x.hasOwnProperty(k)) {
        throw new Error(`Record is missing key "${k}".`);
      }
      try {
        return t.covariant(x[k]);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

field ${k} -> ${e.message}`);
      }
    }))
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const values = this._fields.map(([key]) => x[key]);
    const bufs = zipWith(this._fields, values, ([, c], d) => c.encodeValue(d));
    return concat(...bufs);
  }
  _buildTypeTableImpl(T) {
    this._fields.forEach(([_, value]) => value.buildTypeTable(T));
    const opCode = slebEncode(IDLTypeIds.Record);
    const len = lebEncode(this._fields.length);
    const fields = this._fields.map(([key, value]) => concat(lebEncode(idlLabelToId(key)), value.encodeType(T)));
    T.add(this, concat(opCode, len, concat(...fields)));
  }
  decodeValue(b, t) {
    const record = this.checkType(t);
    if (!(record instanceof RecordClass)) {
      throw new Error("Not a record type");
    }
    const x = {};
    let expectedRecordIdx = 0;
    let actualRecordIdx = 0;
    while (actualRecordIdx < record._fields.length) {
      const [hash, type] = record._fields[actualRecordIdx];
      if (expectedRecordIdx >= this._fields.length) {
        type.decodeValue(b, type);
        actualRecordIdx++;
        continue;
      }
      const [expectKey, expectType] = this._fields[expectedRecordIdx];
      const expectedId = idlLabelToId(this._fields[expectedRecordIdx][0]);
      const actualId = idlLabelToId(hash);
      if (expectedId === actualId) {
        x[expectKey] = expectType.decodeValue(b, type);
        expectedRecordIdx++;
        actualRecordIdx++;
      } else if (actualId > expectedId) {
        if (expectType instanceof OptClass || expectType instanceof ReservedClass) {
          x[expectKey] = [];
          expectedRecordIdx++;
        } else {
          throw new Error("Cannot find required field " + expectKey);
        }
      } else {
        type.decodeValue(b, type);
        actualRecordIdx++;
      }
    }
    for (const [expectKey, expectType] of this._fields.slice(expectedRecordIdx)) {
      if (expectType instanceof OptClass || expectType instanceof ReservedClass) {
        x[expectKey] = [];
      } else {
        throw new Error("Cannot find required field " + expectKey);
      }
    }
    return x;
  }
  get fieldsAsObject() {
    const fields = {};
    for (const [name, ty] of this._fields) {
      fields[idlLabelToId(name)] = ty;
    }
    return fields;
  }
  get name() {
    const fields = this._fields.map(([key, value]) => key + ":" + value.name);
    return `record {${fields.join("; ")}}`;
  }
  display() {
    const fields = this._fields.map(([key, value]) => key + ":" + value.display());
    return `record {${fields.join("; ")}}`;
  }
  valueToString(x) {
    const values = this._fields.map(([key]) => x[key]);
    const fields = zipWith(this._fields, values, ([k, c], d) => k + "=" + c.valueToString(d));
    return `record {${fields.join("; ")}}`;
  }
}
class VariantClass extends ConstructType {
  get typeName() {
    return IdlTypeName.VariantClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.VariantClass;
  }
  constructor(fields = {}) {
    super();
    this._fields = Object.entries(fields).sort((a, b) => idlLabelToId(a[0]) - idlLabelToId(b[0]));
  }
  accept(v, d) {
    return v.visitVariant(this, this._fields, d);
  }
  covariant(x) {
    if (typeof x === "object" && Object.entries(x).length === 1 && this._fields.every(([k, v]) => {
      try {
        return !x.hasOwnProperty(k) || v.covariant(x[k]);
      } catch (e) {
        throw new Error(`Invalid ${this.display()} argument: 

variant ${k} -> ${e.message}`);
      }
    }))
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    for (let i = 0; i < this._fields.length; i++) {
      const [name, type] = this._fields[i];
      if (x.hasOwnProperty(name)) {
        const idx = lebEncode(i);
        const buf = type.encodeValue(x[name]);
        return concat(idx, buf);
      }
    }
    throw Error("Variant has no data: " + x);
  }
  _buildTypeTableImpl(typeTable) {
    this._fields.forEach(([, type]) => {
      type.buildTypeTable(typeTable);
    });
    const opCode = slebEncode(IDLTypeIds.Variant);
    const len = lebEncode(this._fields.length);
    const fields = this._fields.map(([key, value]) => concat(lebEncode(idlLabelToId(key)), value.encodeType(typeTable)));
    typeTable.add(this, concat(opCode, len, ...fields));
  }
  decodeValue(b, t) {
    const variant = this.checkType(t);
    if (!(variant instanceof VariantClass)) {
      throw new Error("Not a variant type");
    }
    const idx = Number(lebDecode(b));
    if (idx >= variant._fields.length) {
      throw Error("Invalid variant index: " + idx);
    }
    const [wireHash, wireType] = variant._fields[idx];
    for (const [key, expectType] of this._fields) {
      if (idlLabelToId(wireHash) === idlLabelToId(key)) {
        const value = expectType.decodeValue(b, wireType);
        return { [key]: value };
      }
    }
    throw new Error("Cannot find field hash " + wireHash);
  }
  get name() {
    const fields = this._fields.map(([key, type]) => key + ":" + type.name);
    return `variant {${fields.join("; ")}}`;
  }
  display() {
    const fields = this._fields.map(([key, type]) => key + (type.name === "null" ? "" : `:${type.display()}`));
    return `variant {${fields.join("; ")}}`;
  }
  valueToString(x) {
    for (const [name, type] of this._fields) {
      if (x.hasOwnProperty(name)) {
        const value = type.valueToString(x[name]);
        if (value === "null") {
          return `variant {${name}}`;
        } else {
          return `variant {${name}=${value}}`;
        }
      }
    }
    throw new Error("Variant has no data: " + x);
  }
  get alternativesAsObject() {
    const alternatives = {};
    for (const [name, ty] of this._fields) {
      alternatives[idlLabelToId(name)] = ty;
    }
    return alternatives;
  }
}
const _RecClass = class _RecClass extends ConstructType {
  constructor() {
    super(...arguments);
    this._id = _RecClass._counter++;
  }
  get typeName() {
    return IdlTypeName.RecClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.RecClass;
  }
  accept(v, d) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return v.visitRec(this, this._type, d);
  }
  fill(t) {
    this._type = t;
  }
  getType() {
    return this._type;
  }
  covariant(x) {
    if (this._type ? this._type.covariant(x) : false)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.encodeValue(x);
  }
  _buildTypeTableImpl(typeTable) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    typeTable.add(this, new Uint8Array([]));
    this._type.buildTypeTable(typeTable);
    typeTable.merge(this, this._type.name);
  }
  decodeValue(b, t) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.decodeValue(b, t);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return `μ${this.name}.${this._type.name}`;
  }
  valueToString(x) {
    if (!this._type) {
      throw Error("Recursive type uninitialized.");
    }
    return this._type.valueToString(x);
  }
};
_RecClass._counter = 0;
let RecClass = _RecClass;
function decodePrincipalId(b) {
  const x = safeReadUint8(b);
  if (x !== 1) {
    throw new Error("Cannot decode principal");
  }
  const len = Number(lebDecode(b));
  return Principal$1.fromUint8Array(new Uint8Array(safeRead(b, len)));
}
class PrincipalClass extends PrimitiveType {
  get typeName() {
    return IdlTypeName.PrincipalClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.PrincipalClass;
  }
  accept(v, d) {
    return v.visitPrincipal(this, d);
  }
  covariant(x) {
    if (x && x._isPrincipal)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const buf = x.toUint8Array();
    const len = lebEncode(buf.byteLength);
    return concat(new Uint8Array([1]), len, buf);
  }
  encodeType() {
    return slebEncode(IDLTypeIds.Principal);
  }
  decodeValue(b, t) {
    this.checkType(t);
    return decodePrincipalId(b);
  }
  get name() {
    return "principal";
  }
  valueToString(x) {
    return `${this.name} "${x.toText()}"`;
  }
}
class FuncClass extends ConstructType {
  get typeName() {
    return IdlTypeName.FuncClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.FuncClass;
  }
  static argsToString(types, v) {
    if (types.length !== v.length) {
      throw new Error("arity mismatch");
    }
    return "(" + types.map((t, i) => t.valueToString(v[i])).join(", ") + ")";
  }
  constructor(argTypes, retTypes, annotations = []) {
    super();
    this.argTypes = argTypes;
    this.retTypes = retTypes;
    this.annotations = annotations;
  }
  accept(v, d) {
    return v.visitFunc(this, d);
  }
  covariant(x) {
    if (Array.isArray(x) && x.length === 2 && x[0] && x[0]._isPrincipal && typeof x[1] === "string")
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue([principal, methodName]) {
    const buf = principal.toUint8Array();
    const len = lebEncode(buf.byteLength);
    const canister = concat(new Uint8Array([1]), len, buf);
    const method = new TextEncoder().encode(methodName);
    const methodLen = lebEncode(method.byteLength);
    return concat(new Uint8Array([1]), canister, methodLen, method);
  }
  _buildTypeTableImpl(T) {
    this.argTypes.forEach((arg) => arg.buildTypeTable(T));
    this.retTypes.forEach((arg) => arg.buildTypeTable(T));
    const opCode = slebEncode(IDLTypeIds.Func);
    const argLen = lebEncode(this.argTypes.length);
    const args = concat(...this.argTypes.map((arg) => arg.encodeType(T)));
    const retLen = lebEncode(this.retTypes.length);
    const rets = concat(...this.retTypes.map((arg) => arg.encodeType(T)));
    const annLen = lebEncode(this.annotations.length);
    const anns = concat(...this.annotations.map((a) => this.encodeAnnotation(a)));
    T.add(this, concat(opCode, argLen, args, retLen, rets, annLen, anns));
  }
  decodeValue(b, t) {
    const tt = t instanceof RecClass ? t.getType() ?? t : t;
    if (!subtype(tt, this)) {
      throw new Error(`Cannot decode function reference at type ${this.display()} from wire type ${tt.display()}`);
    }
    const x = safeReadUint8(b);
    if (x !== 1) {
      throw new Error("Cannot decode function reference");
    }
    const canister = decodePrincipalId(b);
    const mLen = Number(lebDecode(b));
    const buf = safeRead(b, mLen);
    const decoder = new TextDecoder("utf8", { fatal: true });
    const method = decoder.decode(buf);
    return [canister, method];
  }
  get name() {
    const args = this.argTypes.map((arg) => arg.name).join(", ");
    const rets = this.retTypes.map((arg) => arg.name).join(", ");
    const annon = " " + this.annotations.join(" ");
    return `(${args}) -> (${rets})${annon}`;
  }
  valueToString([principal, str]) {
    return `func "${principal.toText()}".${str}`;
  }
  display() {
    const args = this.argTypes.map((arg) => arg.display()).join(", ");
    const rets = this.retTypes.map((arg) => arg.display()).join(", ");
    const annon = " " + this.annotations.join(" ");
    return `(${args}) → (${rets})${annon}`;
  }
  encodeAnnotation(ann) {
    if (ann === "query") {
      return new Uint8Array([1]);
    } else if (ann === "oneway") {
      return new Uint8Array([2]);
    } else if (ann === "composite_query") {
      return new Uint8Array([3]);
    } else {
      throw new Error("Illegal function annotation");
    }
  }
}
class ServiceClass extends ConstructType {
  get typeName() {
    return IdlTypeName.ServiceClass;
  }
  static [Symbol.hasInstance](instance) {
    return instance.typeName === IdlTypeName.ServiceClass;
  }
  constructor(fields) {
    super();
    this._fields = Object.entries(fields).sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
  }
  accept(v, d) {
    return v.visitService(this, d);
  }
  covariant(x) {
    if (x && x._isPrincipal)
      return true;
    throw new Error(`Invalid ${this.display()} argument: ${toReadableString(x)}`);
  }
  encodeValue(x) {
    const buf = x.toUint8Array();
    const len = lebEncode(buf.length);
    return concat(new Uint8Array([1]), len, buf);
  }
  _buildTypeTableImpl(T) {
    this._fields.forEach(([_, func]) => func.buildTypeTable(T));
    const opCode = slebEncode(IDLTypeIds.Service);
    const len = lebEncode(this._fields.length);
    const meths = this._fields.map(([label, func]) => {
      const labelBuf = new TextEncoder().encode(label);
      const labelLen = lebEncode(labelBuf.length);
      return concat(labelLen, labelBuf, func.encodeType(T));
    });
    T.add(this, concat(opCode, len, ...meths));
  }
  decodeValue(b, t) {
    const tt = t instanceof RecClass ? t.getType() ?? t : t;
    if (!subtype(tt, this)) {
      throw new Error(`Cannot decode service reference at type ${this.display()} from wire type ${tt.display()}`);
    }
    return decodePrincipalId(b);
  }
  get name() {
    const fields = this._fields.map(([key, value]) => key + ":" + value.name);
    return `service {${fields.join("; ")}}`;
  }
  valueToString(x) {
    return `service "${x.toText()}"`;
  }
  fieldsAsObject() {
    const fields = {};
    for (const [name, ty] of this._fields) {
      fields[name] = ty;
    }
    return fields;
  }
}
function toReadableString(x) {
  const str = JSON.stringify(x, (_key, value) => typeof value === "bigint" ? `BigInt(${value})` : value);
  return str && str.length > toReadableString_max ? str.substring(0, toReadableString_max - 3) + "..." : str;
}
const Bool = new BoolClass();
const Null = new NullClass();
const Text = new TextClass();
const Int = new IntClass();
const Nat = new NatClass();
new FloatClass(32);
new FloatClass(64);
new FixedIntClass(8);
new FixedIntClass(16);
new FixedIntClass(32);
new FixedIntClass(64);
new FixedNatClass(8);
new FixedNatClass(16);
new FixedNatClass(32);
new FixedNatClass(64);
const Principal = new PrincipalClass();
function Vec(t) {
  return new VecClass(t);
}
function Opt(t) {
  return new OptClass(t);
}
function Record(t) {
  return new RecordClass(t);
}
function Variant(fields) {
  return new VariantClass(fields);
}
function Func(args, ret, annotations = []) {
  return new FuncClass(args, ret, annotations);
}
function Service(t) {
  return new ServiceClass(t);
}
class Relations {
  constructor(relations = /* @__PURE__ */ new Map()) {
    this.rels = relations;
  }
  copy() {
    const copy = /* @__PURE__ */ new Map();
    for (const [key, value] of this.rels.entries()) {
      const valCopy = new Map(value);
      copy.set(key, valCopy);
    }
    return new Relations(copy);
  }
  /// Returns whether we know for sure that a relation holds or doesn't (`true` or `false`), or
  /// if we don't know yet (`undefined`)
  known(t1, t2) {
    var _a;
    return (_a = this.rels.get(t1.name)) == null ? void 0 : _a.get(t2.name);
  }
  addNegative(t1, t2) {
    this.addNames(t1.name, t2.name, false);
  }
  add(t1, t2) {
    this.addNames(t1.name, t2.name, true);
  }
  display() {
    let result = "";
    for (const [t1, v] of this.rels) {
      for (const [t2, known] of v) {
        const subty = known ? ":<" : "!<:";
        result += `${t1} ${subty} ${t2}
`;
      }
    }
    return result;
  }
  addNames(t1, t2, isSubtype) {
    const t1Map = this.rels.get(t1);
    if (t1Map == void 0) {
      const newMap = /* @__PURE__ */ new Map();
      newMap.set(t2, isSubtype);
      this.rels.set(t1, newMap);
    } else {
      t1Map.set(t2, isSubtype);
    }
  }
}
let subtypeCache = new Relations();
function eqFunctionAnnotations(t1, t2) {
  const t1Annotations = new Set(t1.annotations);
  const t2Annotations = new Set(t2.annotations);
  if (t1Annotations.size !== t2Annotations.size) {
    return false;
  }
  for (const a of t1Annotations) {
    if (!t2Annotations.has(a))
      return false;
  }
  return true;
}
function canBeOmmitted(t) {
  return t instanceof OptClass || t instanceof NullClass || t instanceof ReservedClass;
}
function subtype(t1, t2) {
  const relations = subtypeCache.copy();
  const isSubtype = subtype_(relations, t1, t2);
  if (isSubtype) {
    subtypeCache.add(t1, t2);
  } else {
    subtypeCache.addNegative(t1, t2);
  }
  return isSubtype;
}
function subtype_(relations, t1, t2) {
  if (t1.name === t2.name)
    return true;
  const known = relations.known(t1, t2);
  if (known !== void 0)
    return known;
  relations.add(t1, t2);
  if (t2 instanceof ReservedClass)
    return true;
  if (t1 instanceof EmptyClass)
    return true;
  if (t1 instanceof NatClass && t2 instanceof IntClass)
    return true;
  if (t1 instanceof VecClass && t2 instanceof VecClass)
    return subtype_(relations, t1._type, t2._type);
  if (t2 instanceof OptClass)
    return true;
  if (t1 instanceof RecordClass && t2 instanceof RecordClass) {
    const t1Object = t1.fieldsAsObject;
    for (const [label, ty2] of t2._fields) {
      const ty1 = t1Object[idlLabelToId(label)];
      if (!ty1) {
        if (!canBeOmmitted(ty2))
          return false;
      } else {
        if (!subtype_(relations, ty1, ty2))
          return false;
      }
    }
    return true;
  }
  if (t1 instanceof FuncClass && t2 instanceof FuncClass) {
    if (!eqFunctionAnnotations(t1, t2))
      return false;
    for (let i = 0; i < t1.argTypes.length; i++) {
      const argTy1 = t1.argTypes[i];
      if (i < t2.argTypes.length) {
        if (!subtype_(relations, t2.argTypes[i], argTy1))
          return false;
      } else {
        if (!canBeOmmitted(argTy1))
          return false;
      }
    }
    for (let i = 0; i < t2.retTypes.length; i++) {
      const retTy2 = t2.retTypes[i];
      if (i < t1.retTypes.length) {
        if (!subtype_(relations, t1.retTypes[i], retTy2))
          return false;
      } else {
        if (!canBeOmmitted(retTy2))
          return false;
      }
    }
    return true;
  }
  if (t1 instanceof VariantClass && t2 instanceof VariantClass) {
    const t2Object = t2.alternativesAsObject;
    for (const [label, ty1] of t1._fields) {
      const ty2 = t2Object[idlLabelToId(label)];
      if (!ty2)
        return false;
      if (!subtype_(relations, ty1, ty2))
        return false;
    }
    return true;
  }
  if (t1 instanceof ServiceClass && t2 instanceof ServiceClass) {
    const t1Object = t1.fieldsAsObject();
    for (const [name, ty2] of t2._fields) {
      const ty1 = t1Object[name];
      if (!ty1)
        return false;
      if (!subtype_(relations, ty1, ty2))
        return false;
    }
    return true;
  }
  if (t1 instanceof RecClass) {
    return subtype_(relations, t1.getType(), t2);
  }
  if (t2 instanceof RecClass) {
    return subtype_(relations, t1, t2.getType());
  }
  return false;
}
const UserRole = Variant({
  "admin": Null,
  "user": Null,
  "guest": Null
});
const AgentTone$1 = Variant({
  "professional": Null,
  "friendly": Null,
  "casual": Null,
  "formal": Null
});
const BusinessCategory$1 = Variant({
  "Gym": Null,
  "Salon": Null,
  "Coaching": Null,
  "RealEstate": Null,
  "Clinic": Null,
  "Restaurant": Null
});
const AgentLanguage$1 = Variant({
  "hindi": Null,
  "marathi": Null,
  "english": Null
});
const AgentConfigInput = Record({
  "customInstructions": Text,
  "tone": AgentTone$1,
  "useCase": BusinessCategory$1,
  "agentName": Text,
  "language": AgentLanguage$1
});
const AgentStatus$1 = Variant({
  "active": Null,
  "paused": Null
});
const Timestamp = Int;
const AgentConfigView = Record({
  "status": AgentStatus$1,
  "businessId": Text,
  "customInstructions": Text,
  "createdAt": Timestamp,
  "tone": AgentTone$1,
  "useCase": BusinessCategory$1,
  "agentName": Text,
  "agentId": Text,
  "language": AgentLanguage$1
});
const AIPersonality = Record({
  "tone": AgentTone$1,
  "language": AgentLanguage$1
});
const BusinessProfileInput = Record({
  "aiPersonality": AIPersonality,
  "businessName": Text,
  "whatsapp": Opt(Text),
  "email": Text,
  "logoUrl": Opt(Text),
  "address": Text,
  "category": BusinessCategory$1,
  "phone": Text
});
const UserId = Principal;
const BusinessProfileView = Record({
  "businessId": Text,
  "userId": UserId,
  "createdAt": Timestamp,
  "aiPersonality": AIPersonality,
  "businessName": Text,
  "whatsapp": Opt(Text),
  "email": Text,
  "logoUrl": Opt(Text),
  "address": Text,
  "category": BusinessCategory$1,
  "phone": Text
});
const CallStatus$1 = Variant({
  "Transferred": Null,
  "Missed": Null,
  "Completed": Null
});
const CallLogInput = Record({
  "callerPhone": Text,
  "callStatus": CallStatus$1,
  "businessId": Text,
  "recordingUrl": Opt(Text),
  "agentId": Opt(Text),
  "transcriptSnippet": Opt(Text),
  "durationSeconds": Nat,
  "calleePhone": Text
});
const CallLogView = Record({
  "callerPhone": Text,
  "callStatus": CallStatus$1,
  "businessId": Text,
  "recordingUrl": Opt(Text),
  "createdAt": Timestamp,
  "agentId": Opt(Text),
  "transcriptSnippet": Opt(Text),
  "durationSeconds": Nat,
  "callId": Text,
  "calleePhone": Text
});
const LeadSource$1 = Variant({
  "AICall": Null,
  "Manual": Null
});
const LeadPriority$1 = Variant({
  "Low": Null,
  "High": Null,
  "Medium": Null
});
const LeadRecordInput = Record({
  "customerName": Text,
  "propertyType": Opt(Text),
  "source": LeadSource$1,
  "businessId": Text,
  "agentId": Opt(Text),
  "email": Opt(Text),
  "siteVisitInterest": Bool,
  "notes": Text,
  "buyingTimeline": Opt(Text),
  "priority": LeadPriority$1,
  "phone": Text,
  "budget": Opt(Text),
  "location": Opt(Text)
});
const LeadStatus$1 = Variant({
  "New": Null,
  "Closed": Null,
  "Qualified": Null,
  "Scheduled": Null
});
const LeadRecordView = Record({
  "customerName": Text,
  "status": LeadStatus$1,
  "propertyType": Opt(Text),
  "source": LeadSource$1,
  "businessId": Text,
  "createdAt": Timestamp,
  "agentId": Opt(Text),
  "email": Opt(Text),
  "updatedAt": Timestamp,
  "leadId": Text,
  "siteVisitInterest": Bool,
  "notes": Text,
  "buyingTimeline": Opt(Text),
  "priority": LeadPriority$1,
  "phone": Text,
  "budget": Opt(Text),
  "location": Opt(Text)
});
const SubscriptionTier$1 = Variant({
  "pro": Null,
  "enterprise": Null,
  "free": Null,
  "basic": Null
});
const UserProfileView = Record({
  "userId": UserId,
  "createdAt": Timestamp,
  "subscriptionTier": SubscriptionTier$1,
  "email": Text
});
const UserProfileData = Record({
  "subscriptionTier": SubscriptionTier$1,
  "email": Text
});
const AgentConfigUpdate = Record({
  "status": AgentStatus$1,
  "customInstructions": Text,
  "tone": AgentTone$1,
  "useCase": BusinessCategory$1,
  "agentName": Text,
  "language": AgentLanguage$1
});
const LeadRecordUpdate = Record({
  "customerName": Text,
  "status": LeadStatus$1,
  "propertyType": Opt(Text),
  "agentId": Opt(Text),
  "email": Opt(Text),
  "siteVisitInterest": Bool,
  "notes": Text,
  "buyingTimeline": Opt(Text),
  "priority": LeadPriority$1,
  "phone": Text,
  "budget": Opt(Text),
  "location": Opt(Text)
});
Service({
  "_initializeAccessControl": Func([], [], []),
  "assignCallerUserRole": Func([Principal, UserRole], [], []),
  "createAgent": Func([Text, AgentConfigInput], [AgentConfigView], []),
  "createBusiness": Func(
    [BusinessProfileInput],
    [BusinessProfileView],
    []
  ),
  "createCallLog": Func([CallLogInput], [CallLogView], []),
  "createLead": Func([LeadRecordInput], [LeadRecordView], []),
  "deleteAgent": Func([Text], [Bool], []),
  "deleteBusiness": Func([Text], [Bool], []),
  "deleteCallLog": Func([Text], [Bool], []),
  "deleteLead": Func([Text], [Bool], []),
  "deleteUserProfile": Func([], [Bool], []),
  "getAgent": Func([Text], [Opt(AgentConfigView)], ["query"]),
  "getBusiness": Func(
    [Text],
    [Opt(BusinessProfileView)],
    ["query"]
  ),
  "getCallLog": Func([Text], [Opt(CallLogView)], ["query"]),
  "getCallerUserProfile": Func([], [Opt(UserProfileView)], ["query"]),
  "getCallerUserRole": Func([], [UserRole], ["query"]),
  "getLead": Func([Text], [Opt(LeadRecordView)], ["query"]),
  "getUserProfile": Func([UserId], [Opt(UserProfileView)], ["query"]),
  "isCallerAdmin": Func([], [Bool], ["query"]),
  "listAgentsByBusiness": Func(
    [Text],
    [Vec(AgentConfigView)],
    ["query"]
  ),
  "listCallLogsByBusiness": Func(
    [Text],
    [Vec(CallLogView)],
    ["query"]
  ),
  "listLeadsByBusiness": Func(
    [Text],
    [Vec(LeadRecordView)],
    ["query"]
  ),
  "listMyBusinesses": Func([], [Vec(BusinessProfileView)], ["query"]),
  "saveCallerUserProfile": Func([UserProfileData], [UserProfileView], []),
  "updateAgent": Func(
    [Text, AgentConfigUpdate],
    [Opt(AgentConfigView)],
    []
  ),
  "updateBusiness": Func(
    [Text, BusinessProfileInput],
    [Opt(BusinessProfileView)],
    []
  ),
  "updateLead": Func(
    [Text, LeadRecordUpdate],
    [Opt(LeadRecordView)],
    []
  ),
  "updateUserProfile": Func(
    [UserProfileData],
    [Opt(UserProfileView)],
    []
  )
});
var AgentLanguage = /* @__PURE__ */ ((AgentLanguage2) => {
  AgentLanguage2["hindi"] = "hindi";
  AgentLanguage2["marathi"] = "marathi";
  AgentLanguage2["english"] = "english";
  return AgentLanguage2;
})(AgentLanguage || {});
var AgentStatus = /* @__PURE__ */ ((AgentStatus2) => {
  AgentStatus2["active"] = "active";
  AgentStatus2["paused"] = "paused";
  return AgentStatus2;
})(AgentStatus || {});
var AgentTone = /* @__PURE__ */ ((AgentTone2) => {
  AgentTone2["professional"] = "professional";
  AgentTone2["friendly"] = "friendly";
  AgentTone2["casual"] = "casual";
  AgentTone2["formal"] = "formal";
  return AgentTone2;
})(AgentTone || {});
var BusinessCategory = /* @__PURE__ */ ((BusinessCategory2) => {
  BusinessCategory2["Gym"] = "Gym";
  BusinessCategory2["Salon"] = "Salon";
  BusinessCategory2["Coaching"] = "Coaching";
  BusinessCategory2["RealEstate"] = "RealEstate";
  BusinessCategory2["Clinic"] = "Clinic";
  BusinessCategory2["Restaurant"] = "Restaurant";
  return BusinessCategory2;
})(BusinessCategory || {});
var CallStatus = /* @__PURE__ */ ((CallStatus2) => {
  CallStatus2["Transferred"] = "Transferred";
  CallStatus2["Missed"] = "Missed";
  CallStatus2["Completed"] = "Completed";
  return CallStatus2;
})(CallStatus || {});
var LeadPriority = /* @__PURE__ */ ((LeadPriority2) => {
  LeadPriority2["Low"] = "Low";
  LeadPriority2["High"] = "High";
  LeadPriority2["Medium"] = "Medium";
  return LeadPriority2;
})(LeadPriority || {});
var LeadSource = /* @__PURE__ */ ((LeadSource2) => {
  LeadSource2["AICall"] = "AICall";
  LeadSource2["Manual"] = "Manual";
  return LeadSource2;
})(LeadSource || {});
var LeadStatus = /* @__PURE__ */ ((LeadStatus2) => {
  LeadStatus2["New"] = "New";
  LeadStatus2["Closed"] = "Closed";
  LeadStatus2["Qualified"] = "Qualified";
  LeadStatus2["Scheduled"] = "Scheduled";
  return LeadStatus2;
})(LeadStatus || {});
var SubscriptionTier = /* @__PURE__ */ ((SubscriptionTier2) => {
  SubscriptionTier2["pro"] = "pro";
  SubscriptionTier2["enterprise"] = "enterprise";
  SubscriptionTier2["free"] = "free";
  SubscriptionTier2["basic"] = "basic";
  return SubscriptionTier2;
})(SubscriptionTier || {});
export {
  AgentTone as A,
  BusinessCategory as B,
  CallStatus as C,
  LeadSource as L,
  SubscriptionTier as S,
  AgentLanguage as a,
  AgentStatus as b,
  LeadStatus as c,
  LeadPriority as d
};
