module CommonUtils {
	/**
	 * 舞台大小工具类
	 */
	export class StageUtils {
		
		//舞台宽
		private static _stageWidth:number;
		//舞台高
		private static _stageHeight:number;
		//舞台比例
		private static _stageScale:number;

		public static loadAndStoreStageInfo(stage:egret.Stage) :void 
		{
			this._stageWidth = stage.stageWidth;
			this._stageHeight = stage.stageHeight;
			this._stageScale = this._stageWidth / this._stageHeight;
		}

		//获取舞台宽度
		public static getStageWidth():number
		{
			return this._stageWidth;
		}

		//获取舞台高度
		public static getStageHeight():number {
			return this._stageHeight;
		}

		//获取舞台比例
		public static getStageScale():number {
			return this._stageScale;
		}
	}
}