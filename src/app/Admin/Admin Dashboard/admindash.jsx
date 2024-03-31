import React from 'react'
import "./admindash.css"

function admindash() {
  return (
    <div className="admin-dashboard-main">
        <div className="product-nav"></div>
        <div className="hellointro"></div>
        <div className="admin-dash-1">
          <div className="dashleft-1">
            <div className="createproduct">
              <h1>Add New Plant</h1>
              <h2>Click to Create New Plant to be added to Product List</h2>
              <button>Open</button>
            </div>
          </div>
          <div className="dashright-1">
          <div className="createproduct">
          <h1>View/ Update / Delete Current Plants</h1>
          <h2>Click to view or delete or update current list of plants</h2>
          <button>Open</button>
          </div>
          </div>
        </div>
        <div className="admin-dash-2">
        <div className="dashleft-2">
        <div className="createproduct">
        <h1>View Orders</h1>
        <h2>Click to view orders</h2>
        <button>Open</button>
        </div>
        </div>
          <div className="dashright-2">
          <div className="createproduct">
          <h1>Contact Us Querries</h1>
          <h2>Click to view who all wanted to get in touch with you</h2>
          <button>Open</button>
          </div>
          </div>
        </div>
        <div className="admin-dash-3">
        <div className="dashleft-3">
        <div className="createproduct">
        <h1>Account Settings</h1>
        <h2>update password and other things</h2>
        <button>Open</button>
        </div>
        </div>
          <div className="dashright-3"></div>
        </div>
    </div>
  )
}

export default admindash