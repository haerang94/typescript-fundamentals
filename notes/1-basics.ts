//== BASICS ==//

/**
 * (1) x is a string, b/c we’ve initialized it
 */
// let x = "hello world";

/**
 * (2) reassignment is fine
 */
// x = "hello mars";

/**
 * (3) but if we try to change type
 */
// x = 42; // 🚨 ERROR

/**
 * (4) let's look at const. The type is literally 'hello world'
 */
// const y = "hello world";

/**
 * This is called a 'string literal type'. y can never be reassigned since it's a const,
 * so we can regard it as only ever holding a value that's literally the string 'hello world'
 * and no other possible value
 */

/**
 * (5) sometimes we need to declare a variable w/o initializing it
 */
// let z; //any로 인식되는 중, 선언할 때 타입이 지정되지 않았다.
// z = 41; //재할당
// z = "abc"; // (6) oh no! This isn't good 에러가 나지는 않는다.

/**
 * If we look at the type of z, it's `any`. This is the most flexible type
 * in TypeScript (think of it like a JavaScript `let`)
 */

/**
 * (7) we could improve this situation by providing a type annotation
 * when we declare our variable. ** 변수를 선언할 때 타입을 명시해준다.
 */
// let zz: number;
// zz = 41;
// zz = "abc"; // 🚨 ERROR Type '"abc"' is not assignable to type 'number'.

//== SIMPLE ARRAYS ==//

/**
 * (8) simple array types can be expressed using []
 */
// let aa=[]; //never[]로 인식된다.
// let aa: number[] = [];
// aa.push(33);
// aa.push("abc"); // 🚨 ERROR: Argument of type '"abc"' is not assignable to parameter of type 'number'.

/**
 * (9) we can even define a tuple, which has a fixed length
 * 정해진 길이를 가진 튜플을 만들 수도 있다.
 */
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere, USA",
  10110
];

// bb = [1, 2, 3]; // 🚨 ERROR: Type 'number' is not assignable to type 'string'.
//** 타입체크를 하지 않는다. 주의 동적으로 데이터를 넣으면서 타입을 지정해준다.*/
// bb.push(1,4,1,4); 

/**
 * (10) Tuple values often require type annotations (  : [number, number] )
 */
// const xx = [32, 31]; // number[];
// const yy: [number, number] = [32, 31];

//== OBJECTS ==//

/**
 * (11) object types can be expressed using {} and property names
 */
// 세미클론으로 구분해주는것이 좋다. 변수가 아니라 타입이라는 것을 명시해준다.
let cc: { houseNumber: number; streetName: string };
// cc = {
//   streetName: "Fake Street",
//   houseNumber: 123
// };
// 모든 타입은 모두 넣어줘야한다.
// cc = {
//   houseNumber: 33 //에러남
// };
/**
 * 🚨 Property 'streetName'
 * 🚨   is missing in type   '{ houseNumber: number; }'
 * 🚨   but required in type '{ houseNumber: number; streetName: string; }'.
 */

/**
 * (12) You can use the optional operator (?) to
 * indicate that something may or may not be there
 */
// ?: 옵션으로 타입을 넣어주는 방법(넣어도 되고 안넣어도 되고)
// let dd: { houseNumber: number; streetName?: string };
// dd = {
//   houseNumber: 33
// };

// (13) if we want to re-use this type, we can create an interface
// 재사용하려면 interface를 사용하자
// interface Address {
//   houseNumber: number;
//   streetName?: string;
// }
// // and refer to it by name
// let ee: Address = { houseNumber: 33 };

//== UNION & INTERSECTION ==//

/**
 * (14) Union types
 * Sometimes we have a type that can be one of several things
 */

// export interface HasPhoneNumber {
//   name: string;
//   phone: number;
// }

// export interface HasEmail {
//   name: string;
//   email: string;
// }

// let contactInfo: HasEmail | HasPhoneNumber =
//   Math.random() > 0.5
//     ? {
//         // we can assign it to a HasPhoneNumber
//         name: "Mike",
//         phone: 3215551212
//       }
//     : {
//         // or a HasEmail
//         name: "Mike",
//         email: "mike@example.com"
//       };

// contactInfo.name; // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)

/**
 * (15) Intersection types
 */
// let otherContactInfo: HasEmail & HasPhoneNumber = {
//   // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
//   name: "Mike",
//   email: "mike@example.com",
//   phone: 3215551212
// };

// otherContactInfo.name; // NOTE: we can access anything on _either_ type
// otherContactInfo.email;
// otherContactInfo.phone;
// const zzz: any = {} as never;

export default {};
