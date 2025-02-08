import { describe, it, expect } from 'vitest';
import { DATE_UNIT_TYPES } from '../constants';
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } from '../dateUtils';

describe("Date Utils", () => {

  describe("getCurrentYear", () => {
    it("should return the current year", () => {
      expect(getCurrentYear()).toBe(new Date().getFullYear());
    });

    it("should return a number", () => {
      expect(typeof getCurrentYear()).toBe('number');
    });
  });

  describe("add", () => {

    it("should add seconds to a date", () => {
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setSeconds(date.getSeconds() + 5);
      expect(add(date, 5, DATE_UNIT_TYPES.SECONDS)).toEqual(expectedDate);
    });

    it("should add minutes to a date", () => { 
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setMinutes(date.getMinutes() + 5);
      expect(add(date, 5, DATE_UNIT_TYPES.MINUTES)).toEqual(expectedDate);
    });

    it("should add days to a date", () => {
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setDate(date.getDate() + 5);
      expect(add(date, 5)).toEqual(expectedDate);
    });

    it("should add weeks to a date", () => {
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setDate(date.getDate() + 7);
      expect(add(date, 1, DATE_UNIT_TYPES.WEEKS)).toEqual(expectedDate);
    });

    it("should add months to a date", () => {
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setMonth(date.getMonth() + 1);
      expect(add(date, 1, DATE_UNIT_TYPES.MONTHS)).toEqual(expectedDate);
    });

    it("should add years to a date", () => {
      const date = new Date();
      const expectedDate = new Date(date);
      expectedDate.setFullYear(date.getFullYear() + 1);
      expect(add(date, 1, DATE_UNIT_TYPES.YEARS)).toEqual(expectedDate);
    });

    it("should return a new date object", () => {
      const date = new Date();
      expect(add(date, 1)).not.toBe(date);
    });
  });

  describe("isWithinRange", () => {
    it("should check if a date is within a range", () => {
      const date = new Date(2023, 0, 5);
      const from = new Date(2023, 0, 1);
      const to = new Date(2023, 0, 10);
      expect(isWithinRange(date, from, to)).toBe(true);
    });

    it("should return false if date is outside of range", () => {
      const date = new Date(2023, 0, 11);
      const from = new Date(2023, 0, 1);
      const to = new Date(2023, 0, 10);
      expect(isWithinRange(date, from, to)).toBe(false);
    });

    it("should return false if date is equal to from date", () => {
      const date = new Date(2023, 0, 1);
      const from = new Date(2023, 0, 1);
      const to = new Date(2023, 0, 10);
      expect(isWithinRange(date, from, to)).toBe(false);
    });

    it("should return a boolean", () => {
      const date = new Date(2023, 0, 5);
      const from = new Date(2023, 0, 1);
      const to = new Date(2023, 0, 10);
      expect(typeof isWithinRange(date, from, to)).toBe('boolean');
    });
  });

  describe("isDateBefore", () => {
    it("should check if a date is before another date", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 2);
      expect(isDateBefore(date, compareDate)).toBe(true);
    });

    it("should return false if date is after compareDate", () => {
      const date = new Date(2023, 0, 2);
      const compareDate = new Date(2023, 0, 1);
      expect(isDateBefore(date, compareDate)).toBe(false);
    });

    it("should return false if date is equal to compareDate", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 1);
      expect(isDateBefore(date, compareDate)).toBe(false);
    });

    it("should return a boolean", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 2);
      expect(typeof isDateBefore(date, compareDate)).toBe('boolean');
    });
  });

  describe("isSameDay", () => {
    it("should check if two dates are the same day", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 1);
      expect(isSameDay(date, compareDate)).toBe(true);
    });

    it("should return false if dates are not the same day", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 2);
      expect(isSameDay(date, compareDate)).toBe(false);
    });

    it("should return a boolean", () => {
      const date = new Date(2023, 0, 1);
      const compareDate = new Date(2023, 0, 1);
      expect(typeof isSameDay(date, compareDate)).toBe('boolean');
    });
  });

});