package com.dicks.engine;

import java.util.ArrayList;

public class EngineLog {
	private ArrayList<String> logs = new ArrayList<String>();

	public ArrayList<String> getLogs() {
		return logs;
	}

	public void setLogs(ArrayList<String> logs) {
		this.logs = logs;
	}
	
	public void addLog(String log) {
		logs.add(log);
	}
}
