import './Sign-in.css'

const UserInfoForm: React.FC = () => {
  return (
    <>
      <div>
        <span> 사용자</span>
        <input type="text" placeholder="사용자 명을 입력해주세요." />
      </div>
      <div>
        <span> 비밀번호 </span>
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
    </>
  )
}

const SignIn: React.FC = () => {
  return (
    <div className="signin-container">
      <div className="userInput-form">
        <UserInfoForm />
      </div>
    </div>
  )
}

export default SignIn