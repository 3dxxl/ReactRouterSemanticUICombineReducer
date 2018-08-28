export const initialState = {
    schriftNav: 'Times New Roman'
}; 

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    

			case "CHANGE_Schrift":
					return {
						//	...state,
							schriftNav: "Verdana"
					};

			case "CHANGE_SchriftZurück":
					return {
						//	...state,
							schriftNav: "Times New Roman"
					};
			

			default:
					return state
	}
}