import { expect, test } from "vitest";
import { getBirthdayDay } from "./main";

test('returns [\'Auca\', 22]', () => {
    expect(getBirthdayDay('Auca')).toStrictEqual(['May', 22])
})