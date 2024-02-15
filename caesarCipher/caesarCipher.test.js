import { cipher } from "./caesarCipher";

test("Returns a caesar cipher for provided string and shift argument", () => {
  expect(cipher("xyz abc!,.", 50)).toBe("OPQR89:S^`");
});
