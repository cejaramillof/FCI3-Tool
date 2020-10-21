**HOC**

# Authorization


Use Authorization **H**igher **O**rder **C**omponent to enable a comonent depending of the user role

```jsx 
import Authorization from 'Authorization';
const AuthComponent = Authorization(<List-of-User-Roles>, <component>,<component>);
<AuthComponent/> 
```
**Authorization** HOC is connected to redux store
``` const mapStateToProps = state => ({ user: state.user }); ```

Uses ```user.role``` to get current user role to validate
Params:

| Param             | Type        |                                 |          |
| ----------------- |:-----------:| :-------------------------------| :--------|
| roles             | Array       | List of Authorized roles        | Optional |
| GreenComponent    | Component   | Component to render if Auth     | Optional |
| RedComponent      | Component   | Component to render if NOT Auth | Optional |

Example using **Roles Constants** for only Recruiters

```jsx 
import Authorization from 'Authorization';
import * as ROLES from 'Authorization/roles';

const requiredAuthComponent = props => <p>{props.children}</p>;

const AuthComponent = Authorization([ROLES.RECRUITER], requiredAuthComponent);

<AuthComponent>This component is authorised for this user role</AuthComponent> 
```

Example using **Roles Constants** for Recruiters and Gatekeepers

```jsx 
import Authorization from 'Authorization';
import * as ROLES from 'Authorization/roles';

const requiredAuthComponent = props => <p>{props.children}</p>;

const AuthComponent = Authorization([ROLES.RECRUITER, ROLES.GATEKEEPER], requiredAuthComponent);

<AuthComponent>This component is authorised for this user role</AuthComponent> 
```


Example using **Roles Constants** for all user Roles

```jsx 
import Authorization from 'Authorization';
import * as ROLES from 'Authorization/roles';

const requiredAuthComponent = props => <p>{props.children}</p>;

const AuthComponent = Authorization(ROLES.ALL, requiredAuthComponent);

<AuthComponent>This component is authorised for this user role</AuthComponent> 
```

