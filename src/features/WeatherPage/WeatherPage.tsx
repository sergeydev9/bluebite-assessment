import { useParams } from 'react-router';
import { usePage } from "../../api/page.api";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { RootList } from "./RootList";
import { WeatherPageContextProvider } from "./Context";

export const WeatherPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error } = usePage(id)

  if (error) {
    return <ErrorMessage error={error} />
  }

  if (!data) {
    return <>Loading...</>
  }

  return (
    <WeatherPageContextProvider data={data}>
      <RootList />
    </WeatherPageContextProvider>
  )
};
