import { Btn } from "../../../share";
import { Title } from "../../../share/ui/title";

const AuthPage: React.FC = () => {
  return (
    <div>
      <Title title='Sign in | Goods4you' />
      <h1>Sign in</h1>
      <form>
        <input placeholder='Login' />
        <input placeholder='Login' />
        <Btn text='Password' />
      </form>
    </div>
  );
}

export default AuthPage;