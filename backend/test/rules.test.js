const assert = require('assert');
const {
  townhallRule, farmRule, mineRule, academyRule,
  foxRule,
} = require('../rules');

describe('Rules', () => {
  describe('townhallRule', () => {
    it('should return data object when getting townhallRule', () => {
      assert.notStrictEqual(townhallRule, {});
      assert.notStrictEqual(townhallRule, undefined);
      assert.notStrictEqual(townhallRule, null);
    });
  });
  describe('farmRule', () => {
    it('should return data object when getting farmRule', () => {
      assert.notStrictEqual(farmRule, {});
      assert.notStrictEqual(farmRule, undefined);
      assert.notStrictEqual(farmRule, null);
    });
  });
  describe('mineRule', () => {
    it('should return data object when getting mineRule', () => {
      assert.notStrictEqual(mineRule, {});
      assert.notStrictEqual(mineRule, undefined);
      assert.notStrictEqual(mineRule, null);
    });
  });
  describe('academyRule', () => {
    it('should return data object when getting academyRule', () => {
      assert.notStrictEqual(academyRule, {});
      assert.notStrictEqual(academyRule, undefined);
      assert.notStrictEqual(academyRule, null);
    });
  });
  describe('foxRule', () => {
    it('should return data object when getting foxRule', () => {
      assert.notStrictEqual(foxRule, {});
      assert.notStrictEqual(foxRule, undefined);
      assert.notStrictEqual(foxRule, null);
    });
  });
});
