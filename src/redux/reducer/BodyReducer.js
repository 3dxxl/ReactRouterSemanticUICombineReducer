//Der state muss bei Nutzung von combineReducer in den jeweiligen Reducern implementiert werden
//natürlich nur der state der für diesen Reducer benötigt wird
export const initialState = {
    farbe: 'green',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    
			case "CHANGE_COLORinBlue":
					return {
                        //...state macht hier keinen Sinn, da ich nur ein Objekt im state habe und ich für diese Funktion nur ein Objekt benötige
						//	...state,
							farbe: "blue"
					};

			case "CHANGE_COLORinRed":
					return {
                        //...state macht hier keinen Sinn, da ich nur ein Objekt im state habe und ich für diese Funktion nur ein Objekt benötige
						//	...state,
							farbe: "red"
                    };
                    
                    default:
					return state
	}
}