import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteEdu } from "../../action/profile";
function ShowEdu({ education }) {
  // const education = useSelector(
  //   (state) => state.profileReducer.profile.education
  // );
  const dispatch = useDispatch();
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>

      <td className="hide-sm ">{edu.fieldofstudy}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.form}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm rounded-circle"
          onClick={() => {
            console.log(edu._id);
            dispatch(deleteEdu(edu._id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="my-2">education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Field Of Study</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
}

export default ShowEdu;
