/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAction } from "../store/fetchSlice";
import { itemsAction } from "../store/itemsSlice";
import LoadingSpinner from "./LoadingSpinner";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => data.items[0])
      .then((data) => {
        dispatch(itemsAction.addItems(data));
        dispatch(fetchingAction.markFetchDone());
        dispatch(fetchingAction.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <div>{fetchStatus.currentlyFetching ? <LoadingSpinner /> : <></>}</div>
  );
};

export default FetchItems;
