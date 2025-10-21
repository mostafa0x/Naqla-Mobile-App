import { AppDisptach, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDisptach>();

export const useAppSelector = useSelector.withTypes<RootState>();
