/*
 * This file is unchanged, except for removing eslint comments
 */
import type { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export function useBackButton(_: React.RefObject<NavigationContainerRef<ParamListBase> | null>) {
  // No-op
  // BackHandler is not available on web
}
