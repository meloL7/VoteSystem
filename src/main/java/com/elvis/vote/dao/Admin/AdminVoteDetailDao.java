package com.elvis.vote.dao.Admin;

import com.elvis.vote.pojo.VoteContent;

import java.util.ArrayList;
import java.util.List;

public interface AdminVoteDetailDao {
    List<VoteContent> searchVoteContentList();
}
