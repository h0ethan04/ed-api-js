
import { create } from 'axios';
const base_url = "https://us.edstem.org/api/";

class EdAPI {
    constructor(api_key) {
        this.instance = create({
            baseUrl: base_url,
            timeout: 5000,
            headers: {"Authorization": `Bearer ${api_key}`}
        });
    }


    async getUser() {
        try {
            const userInfo = await this.instance.get('user');
            return userInfo;
        } catch (err) {
            console.log(err);
        }
    }

    async getUserActivity(userId, courseId, limit = 30, offset = 0, filter = "all") {
        try {
            const userActivity = await this.instance.get(`users/${userId}/profile/activity`,
            {
                params: {
                    courseID: courseId,
                    limit: limit,
                    offset: offset,
                    filter: filter
                }
            });
            return userActivity.items ?? [];
        } catch (err) {
            console.log(err)
        }
    }

    async getThreads(courseId, limit = 30, offset = 0, sort = "new") {
        try {
            const allThreads = await this.instance.get(`courses/${courseId}/threads`, {
                params: {
                    limit: limit,
                    offset: offset,
                    sort: sort
                }
            });
            return allThreads.threads;
        } catch (err) {
            console.log(err);
        }
    }

    async getThread(threadId) {
        try {
            const thread = await this.instance.get(`threads/${threadId}`);
            return thread.thread;
        } catch (err) {
            console.log(err);
        }
    }

    async getCourseThread(courseId, threadNumber) {
        try {
            const thread = await this.instance.get(`courses/${courseId}/threads/${threadNumber}`);
            return thread.thread;
        } catch (err) {
            console.log(err);
        }
    }
}

export default EdAPI;