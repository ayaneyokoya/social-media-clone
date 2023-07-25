import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
        <div className="container">
            <div className="item">
                <span>Suggested</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightBar