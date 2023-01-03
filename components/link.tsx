import { LinkProps, Link as MuiLink } from '@mui/material';
import { Button, ButtonProps } from '@mui/material';
import NextLink from 'next/link';

function LinkText(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />;
}

function LinkButton(props: ButtonProps<'a'>) {
  return <Button component={NextLink} {...props} />;
}

export { LinkText, LinkButton };
