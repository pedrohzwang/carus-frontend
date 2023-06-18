import { MantineThemeOverride, TextProps } from "@mantine/core";

export interface StyledTextProps extends TextProps {
    theme?: MantineThemeOverride
}