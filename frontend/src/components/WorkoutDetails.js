import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',

        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>

            <div className="partition">
                <p>Load: <strong>{workout.load}</strong></p>
                <p>Reps: <strong>{workout.reps}</strong></p>
                <p className="created-date">
                    {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
                </p>
                <span className="material-symbols-outlined" onClick={handleClick}>
                    {/* ❌ */}
                    delete
                </span>
            </div>
        </div>



    )
}

export default WorkoutDetails;