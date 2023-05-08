import { BsGithub } from 'react-icons/bs';
import {
  BiGitBranch,
  BiGitCommit,
  BiGitCompare,
  BiGitMerge,
  BiGitPullRequest,
  BiGitRepoForked,
} from 'react-icons/bi';
import { DiGitMerge } from 'react-icons/di';

export default function getIconByName(iconName) {
  switch (iconName) {
    case 'BsGithub':
      return <BsGithub />;
    case 'BiGitBranch':
      return <BiGitBranch />;
    case 'BiGitCommit':
      return <BiGitCommit />;
    case 'BiGitCompare':
      return <BiGitCompare />;
    case 'BiGitMerge':
      return <BiGitMerge />;
    case 'BiGitPullRequest':
      return <BiGitPullRequest />;
    case 'BiGitRepoForked':
      return <BiGitRepoForked />;
    case 'DiGitMerge':
      return <DiGitMerge />;
    default:
      return null;
  }
}
