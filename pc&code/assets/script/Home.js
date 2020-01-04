//home主界面
cc.Class({
    extends: cc.Component,
    properties: {
        progressBar: null,
        loadingLabel: cc.Label,
        startButton: cc.Button
    },
    //加载完成
    onLoad() {
        cc.director.preloadScene("game", this.onProgress.bind(this), this.onLoaded.bind(this));
    },
    //start
    start() {
        this.progressBar = this.node.getChildByName("progressBar").getComponent(cc.ProgressBar);
        this.startButton.node.active = false;
    },
    //预加载进度
    onProgress: function (completedCount, totalCount, item) {
        let completedRate = completedCount / totalCount;
		console.log("completedRate="+completedRate);
		
        //this.progressBar.progress = completedRate;
		//debugger;
        this.loadingLabel.string = "加载中...（" + parseInt(completedRate * 100).toString() + "）";
    },
    //预加载完成
    onLoaded: function () {
        this.loadingLabel.string = "加载完成（100%）";
        this.startButton.node.active = true;
    }
});
