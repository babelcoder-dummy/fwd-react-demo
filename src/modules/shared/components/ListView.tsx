import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
  Skeleton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type ListViewProps<T> = {
  data: T[] | undefined;
  primary: keyof T;
  secondary: keyof T;
  to: (item: T) => string;
  isLoading: boolean;
};

function ListView<T extends { id: number }>({
  data,
  primary,
  secondary,
  to,
  isLoading,
}: ListViewProps<T>) {
  if (isLoading) {
    return (
      <>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </>
    );
  }

  return (
    <List>
      {data?.map((item) => (
        <Link
          key={item.id}
          underline="none"
          color="inherit"
          component={RouterLink}
          to={to(item)}
        >
          <ListItem>
            <ListItemText primary={item[primary]} secondary={item[secondary]} />
          </ListItem>
          <Divider />
        </Link>
      ))}
    </List>
  );
}

export default ListView;
