import { useAppDispatch } from "@/hooks/useStore";
import { getData } from "@/service/Storage";
import { SplashScreen } from "expo-router";
import React, { useEffect, useState } from "react";
import AuidoPlayerProvider from "./AuidoPlayerProvider";

export default function AllProvidersContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [isLoadingGame, setiIsLoadingGame] = useState(false);

  useEffect(() => {
    if (isLoadingGame) return;
    const callData = async () => {
      try {
        await getData(dispatch);
        setiIsLoadingGame(true);
      } catch (err: any) {
        console.error(err);
        throw err;
      }
    };
    callData();

    return () => {};
  }, [isLoadingGame]);

  if (isLoadingGame) {
    SplashScreen.hide();
  }
  return <AuidoPlayerProvider>{children}</AuidoPlayerProvider>;
}
