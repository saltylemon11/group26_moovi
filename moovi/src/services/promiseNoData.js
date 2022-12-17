import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function promiseNoData(promiseState) {
  let promise = promiseState.promise;
  let data = promiseState.data;
  let error = promiseState.error;

  if (!promise) return <div>No data</div>;
  if (!data && !error)
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  if (!data && error) return <div>{error.toString()}</div>;
  if (data && !error) return false;
}

export default promiseNoData;
