import styled from 'styled-components';



export const StyledIcon = (IconComponent: any) => styled(IconComponent)`
    ${({ theme }) => {
        const { colors, spacing, typography } = theme;
        return {
        color: colors.primary,
        fontSize: typography.fontSize.large,
        margin: spacing(2),
        };
    }}
    cursor: pointer;
`;