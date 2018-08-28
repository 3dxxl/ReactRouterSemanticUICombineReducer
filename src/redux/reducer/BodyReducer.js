export const initialState = {
    farbe: 'green',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    
			case "CHANGE_COLORinBlue":
					return {
						//	...state,
							farbe: "blue"
					};

			case "CHANGE_COLORinRed":
					return {
						//	...state,
							farbe: "red"
                    };
                    
                    default:
					return state
	}
}