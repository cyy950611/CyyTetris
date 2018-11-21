var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CommonUtils;
(function (CommonUtils) {
    /**
     * 舞台大小工具类
     */
    var StageUtils = (function () {
        function StageUtils() {
        }
        StageUtils.loadAndStoreStageInfo = function (stage) {
            this._stageWidth = stage.stageWidth;
            this._stageHeight = stage.stageHeight;
            this._stageScale = this._stageWidth / this._stageHeight;
        };
        //获取舞台宽度
        StageUtils.getStageWidth = function () {
            return this._stageWidth;
        };
        //获取舞台高度
        StageUtils.getStageHeight = function () {
            return this._stageHeight;
        };
        //获取舞台比例
        StageUtils.getStageScale = function () {
            return this._stageScale;
        };
        return StageUtils;
    }());
    CommonUtils.StageUtils = StageUtils;
    __reflect(StageUtils.prototype, "CommonUtils.StageUtils");
})(CommonUtils || (CommonUtils = {}));
//# sourceMappingURL=StageUtils.js.map