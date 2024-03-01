function add(a: number, b: string) { 
    return … 
}

type FirstArgs<F> = < 이 부분을 작성하세요 >
type SecondArgs<F> = < 이 부분을 작성하세요 >
type Args<F> = < 이 부분을 작성하세요 >

type A = FirstArgs<typeof add>;  // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string

type AX = Args<String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX = Args<String.prototype.charAt>;
    // ⇒ number
  