export interface IPage {
	title: string;
	rm: {
		introTitle: string;
		introDesc: string;
		workList: [{ workListName: string; workListImg: { sourceUrl: string } }];
	};
}
