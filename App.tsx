import { Provider } from "./src/providers";
import { DefaultRouter } from "./src/router/default-router";

export default function(){
    return(
    <Provider>
    <DefaultRouter />
    </Provider> 
    );
}