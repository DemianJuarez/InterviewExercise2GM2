import { useEffect, useState } from "react";
import { Category } from "./components/Category";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [adminFilter, setAdminFilter] = useState([]);
  const [clerkFilter, setClerkFilter] = useState([]);
  const [userFilter, setUserFilter] = useState([]);
  const [newFilter, setNewFilter] = useState([]);
  const [needs_AttentionFilter, setNeeds_AttentionFilter] = useState([]);
  const [follow_UpFilter, setFollow_UpFilter] = useState([]);
  const [redirect_To_ManagerFilter, setRedirect_To_ManagerFilter] = useState(
    []
  );
  const [randomFilter, setRandomFilter] = useState([]);

  const [option, setOption] = useState(true);

  useEffect(() => {
    const getUsersList = async () => {
      const api = "https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users";
      const response = await fetch(api);
      const result = await response.json();
      setUsersList(result);
    };
    getUsersList();
  }, []);

  useEffect(() => {
    const getAdmins = () => {
      const admins = usersList.filter((user) => user.roles.includes("admin"));
      setAdminFilter(admins);
    };
    getAdmins();

    const getUser = () => {
      const users = usersList.filter((user) => user.roles.includes("user"));
      setUserFilter(users);
    };
    getUser();

    const getClerk = () => {
      const clerks = usersList.filter((user) => user.roles.includes("clerk"));
      setClerkFilter(clerks);
    };
    getClerk();

    const getNew = () => {
      const news = usersList.filter((user) => user.tags.includes("new"));
      setNewFilter(news);
    };
    getNew();

    const getNeeds_Attention = () => {
      const needs_attentions = usersList.filter((user) =>
        user.tags.includes("needs_attention")
      );
      setNeeds_AttentionFilter(needs_attentions);
    };
    getNeeds_Attention();

    const getFollow_Up = () => {
      const follow_ups = usersList.filter((user) =>
        user.tags.includes("follow_up")
      );
      setFollow_UpFilter(follow_ups);
    };
    getFollow_Up();

    const getRedirect_To_Manager = () => {
      const redirect_to_managers = usersList.filter((user) =>
        user.tags.includes("redirect_to_manager")
      );
      setRedirect_To_ManagerFilter(redirect_to_managers);
    };
    getRedirect_To_Manager();

    const getRandom = () => {
      const randoms = usersList.filter((user) => user.tags.includes("random"));
      setRandomFilter(randoms);
    };
    getRandom();
  }, [usersList]);

  const handleOption = (e) => {
    const selectedOption = e.target.value;
    setOption(selectedOption === "role" ? true : false);
  };

  return (
    <>
      <div
        className="Container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>All Users</h1>
        <label htmlFor="selectCategory">Seleccione una opcion: </label>
        <select
          id="selectCategory"
          style={{ width: "200px" }}
          onChange={handleOption}
        >
          <option value="role" onChange={handleOption}>
            Rol
          </option>
          <option value="tag" onChange={handleOption}>
            Tag
          </option>
        </select>
        <br />
        {option ? (
          <div className="RolesContainer">
            <Category categoryIndex="Admin" categoryList={adminFilter} />
            <Category categoryIndex="Clerk" categoryList={clerkFilter} />
            <Category categoryIndex="User" categoryList={userFilter} />
          </div>
        ) : (
          <div className="TagsContainer">
            <Category categoryIndex="random" categoryList={randomFilter} />

            <Category
              categoryIndex="needs_attention"
              categoryList={needs_AttentionFilter}
            />
            <Category categoryIndex="new" categoryList={newFilter} />

            <Category
              categoryIndex="follow_up"
              categoryList={follow_UpFilter}
            />
            <Category
              categoryIndex="redirect_to_manager"
              categoryList={redirect_To_ManagerFilter}
            />
            <Category categoryIndex="random" categoryList={randomFilter} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
