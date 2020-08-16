import routes from './routes';
import { Switch } from 'react-router-dom';

<Switch>

  {routes.map(item => {
    const component = item.isRequiredAuthRequired ? PrivateRoute : PublicRoute;
   <component 
  })}
</Switch>
