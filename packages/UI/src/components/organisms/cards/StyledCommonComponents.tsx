import Box from '../../atoms/Box';
import Tags from '../../atoms/Tags';
import Typography from '../../atoms/Typography';

interface TagsContainerProps {
  list: string[];
}

export const TagsContainer = ({ list }: TagsContainerProps) => {
  return (
    <Box
      flexDirection="column"
      gap="16px"
      padding="32px 32px 16px 8px"
      maxWidth="282px"
    >
      <Typography type="h5">Position tags</Typography>
      <Box flexWrap="wrap" gap="8px">
        {list.map((tag: string) => (
          <Tags
            key={tag}
            bgColor="GREYSCALE_BLACK"
            onClose={() => 1}
            txtColor="GREYSCALE_WHITE"
          >
            {tag}
          </Tags>
        ))}
      </Box>
    </Box>
  );
};

interface CardDescriptionProps {
  title?: string;
  subtitle: string;
  body: string;
}

export const CardDescription = ({
  title,
  subtitle,
  body,
}: CardDescriptionProps) => {
  return (
    <Box
      padding="32px 8px 16px"
      flexDirection="column"
      gap="16px"
      maxWidth="450px"
    >
      {title && <Typography type="h3">{title}</Typography>}
      <Typography type="h5">{subtitle}</Typography>
      <Typography type="p">{body}</Typography>
    </Box>
  );
};
