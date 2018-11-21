class mainScene extends eui.Component implements  eui.UIComponent {
		
		private btn_ranking:eui.Button;
		private btn_score:eui.Button;
		private btn_rank:eui.Button;
		private	btn_start:eui.Button;
		public constructor() {
			super();
			
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
			this.registEvents();
		}

		private registEvents() {
			
		}
	}