"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      rowCount: 10
      // 设置行数
    };
  },
  methods: {
    clickSwiper() {
      common_vendor.index.navigateTo({
        url: "../../../sub_pages/displayarea/displayarea"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.clickSwiper())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/pages/tabbar/home/home.vue"]]);
wx.createPage(MiniProgramPage);
