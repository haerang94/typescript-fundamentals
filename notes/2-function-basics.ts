import { HasEmail, HasPhoneNumber } from "./1-basics";

//== FUNCTIONS ==//

// (1) function arguments and return values can have type annotations
// 리턴 값도 타입 지정을 할 수 있다
// function sendEmail(to: HasEmail): { recipient: string; body: string } {
//   return {
//     recipient: `${to.name} <${to.email}>`, // Mike <mike@example.com>
//     body: "You're pre-qualified for a loan!"
//   };
// }

// (2) or the arrow-function variant
// const sendTextMessage = (
//   to: HasPhoneNumber
// ): { recipient: string; body: string } => {
//   return {
//     recipient: `${to.name} <${to.phone}>`,
//     body: "You're pre-qualified for a loan!"
//   };
// };

// (3) return types can almost always be inferred
// 리턴 값을 추론해준다.
// function getNameParts(contact: { name: string }) {
//   const parts = contact.name.split(/\s/g); // split @ whitespace
//   if (parts.length < 2) {
//     throw new Error(`Can't calculate name parts from name "${contact.name}"`);
//     // 여기서 값을 return 하면 아래의 first,middle,last가 undefined로 추론된다.
//   }
//   return {
//     first: parts[0],
//     middle:
//       parts.length === 2
//         ? undefined
//         : // everything except first and last
//           parts.slice(1, parts.length - 2).join(" "),
//     last: parts[parts.length - 1]
//   };
// }

// (4) rest params work just as you'd think. Type must be array-ish
// const sum = (...vals: number[]) => vals.reduce((sum, x) => sum + x, 0);
// console.log(sum(3, 4, 6)); // 13

// (5) we can even provide multiple function signatures
// "overload signatures"
//  argument에 따라서 어떻게 넣어야할지 알려주는 역할을 한다.
// function contactPeople(method: "email", ...people: HasEmail[]): void;
// function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// "function implementation"
// function contactPeople(
//   method: "email" | "phone",
//   ...people: (HasEmail | HasPhoneNumber)[]
// ): void {
//   if (method === "email") {
//     (people as HasEmail[]).forEach(sendEmail);
//   } else {
//     (people as HasPhoneNumber[]).forEach(sendTextMessage);
//   }
// }

// ✅ email works
// contactPeople("email", { name: "foo", email: "" });

// ✅ phone works
// contactPeople("phone", { name: "foo", phone: 12345678 });

// 🚨 mixing does not work
// contactPeople("email", { name: "foo", phone: 12345678 });

// (6) the lexical scope (this) of a function is part of its signature
// 자바스크립트에서 this는 선언시에 
// 결정되는 렉시컬 스코프를 가진다. 꼭 정의할 필요는 없지만 이런 경우가 있다.
// function sendMessage(
//   this: HasEmail & HasPhoneNumber,
//   preferredMethod: "phone" | "email"
// ) {
//   if (preferredMethod === "email") {
//     console.log("sendEmail");
//     sendEmail(this);
//   } else {
//     console.log("sendTextMessage");
//     sendTextMessage(this);
//   }
// }
// const c = { name: "Mike", phone: 3215551212, email: "mike@example.com" };

// function invokeSoon(cb: () => any, timeout: number) {
//   setTimeout(() => cb.call(null), timeout);
// }

// 🚨 this is not satisfied
// invokeSoon(() => sendMessage("email"), 500);

// ✅ creating a bound function is one solution
// const bound = sendMessage.bind(c, "email");
// invokeSoon(() => bound(), 500);

// ✅ call/apply works as well
// invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);

export default {};
