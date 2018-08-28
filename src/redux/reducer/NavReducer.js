//Der state muss bei Nutzung von combineReducer in den jeweiligen Reducern implementiert werden
//natürlich nur der state der für diesen Reducer benötigt wird
export const initialState = {
    schriftNav: 'Times New Roman'
}; 

export const reducer = (state = initialState, action) => {
	switch (action.type) {
    

			case "CHANGE_Schrift":
					return {
                        //...state macht hier keinen Sinn, da ich nur ein Objekt im state habe und ich für diese Funktion nur ein Objekt benötige
						//	...state,
							schriftNav: "Verdana"
					};

			case "CHANGE_SchriftZurück":
					return {
                        //...state macht hier keinen Sinn, da ich nur ein Objekt im state habe und ich für diese Funktion nur ein Objekt benötige
						//	...state,
							schriftNav: "Times New Roman"
					};
			

			default:
					return state
	}
}