import { _private } from "./index.js";
import { expect, test } from "vitest";

test("Distinct Differences case 1", function case_1() {
    let response = _private.calculateDistinctDifferences([2, 5, 2, 7, 4]);
    expect(response).toBe(2);
});

test("Distinct Differences case 2", function case_2() {
    let response = _private.calculateDistinctDifferences([0, 1, -2, 3, -4, 5]);
    expect(response).toBe(5);
});

test("Distinct Differences case 3", function case_3() {
    let response = _private.calculateDistinctDifferences([0, 0]);
    expect(response).toBe(1);
});

test("Bananas case 1", function case_1() {
    let response = _private.stripBananas("NAABXXAN");
    expect(response).toBe(1);
});

test("Bananas case 2", function case_2() {
    let response = _private.stripBananas("NAANAAXNABABYNNBZ");
    expect(response).toBe(2);
});

test("Bananas case 3", function case_3() {
    let response = _private.stripBananas("QABAAAWOBL");
    expect(response).toBe(0);
});
